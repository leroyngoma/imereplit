import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, mkdirSync, writeFileSync, readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('Running custom build script for Netlify...');

// 1. Install dependencies
console.log('Installing dependencies...');
execSync('npm install', { stdio: 'inherit' });

// 2. Build the application
console.log('Building application...');
// First build the client
console.log('Building client...');
execSync('vite build', { stdio: 'inherit' });

// Then build the server with proper Node.js target
console.log('Building server...');
execSync('esbuild server/index.ts --platform=node --target=node18 --bundle --format=esm --outdir=dist --external:@neondatabase/serverless', { stdio: 'inherit' });

// Copy package.json to dist for server dependencies
const pkg = JSON.parse(readFileSync('package.json', 'utf-8'));
const serverPkg = {
  name: pkg.name,
  version: pkg.version,
  private: true,
  type: 'module',
  main: 'index.js',
  dependencies: {
    ...pkg.dependencies,
    '@netlify/functions': '^3.0.0',
    'serverless-http': '^3.2.0'
  }
};
writeFileSync('dist/package.json', JSON.stringify(serverPkg, null, 2));

// 3. Create a serverless-http wrapper for the Express app
console.log('Creating serverless function...');
const serverlessContent = `
import { createServer } from '@netlify/functions';
import serverless from 'serverless-http';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import the Express app
const app = (await import('${join(process.cwd(), 'server', 'index.js').replace(/\\/g, '\\')}')).default;

// Create a serverless handler for the Express app
const handler = serverless(app);

// Export the Netlify function
export const handler = createServer(async (event, context) => {
  try {
    const response = await handler(event, context);
    return response;
  } catch (error) {
    console.error('Error in Netlify function:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Internal Server Error',
        message: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      })
    };
  }
});
`;

// Ensure the netlify/functions directory exists
const functionsDir = join(process.cwd(), 'netlify', 'functions');
if (!existsSync(functionsDir)) {
  mkdirSync(functionsDir, { recursive: true });
}

// Write the serverless function
writeFileSync(join(functionsDir, 'server.js'), serverlessContent);

console.log('Build completed successfully!');
