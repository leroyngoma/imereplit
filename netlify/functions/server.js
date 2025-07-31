// Use CommonJS require for better compatibility with Netlify Functions
const { createServer } = require('@netlify/functions');
const serverless = require('serverless-http');
const path = require('path');

// Use dynamic import to handle ESM modules
let app;
let handlerInstance;

async function initializeApp() {
  if (!app) {
    try {
      console.log('Initializing app...');
      // Use dynamic import to load the ESM module
      const module = await import(path.join(process.cwd(), 'dist', 'index.js'));
      app = module.default || module;
      console.log('App initialized successfully');
    } catch (error) {
      console.error('Failed to initialize app:', error);
      throw error;
    }
  }
  return app;
}

// Create the handler
async function getHandler() {
  if (!handlerInstance) {
    const app = await initializeApp();
    handlerInstance = serverless(app, {
      // Add any serverless-http options here
      request: (request, event, context) => {
        // Add any request transformations here
        return request;
      },
      response: (response) => {
        // Add any response transformations here
        return response;
      }
    });
  }
  return handlerInstance;
}

// Main handler function
exports.handler = createServer(async (event, context) => {
  try {
    console.log('Processing request:', event.path);
    const handler = await getHandler();
    const response = await handler(event, context);
    
    // Ensure CORS headers are set
    if (!response.headers) response.headers = {};
    response.headers['Access-Control-Allow-Origin'] = '*';
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
    
    return response;
  } catch (error) {
    console.error('Error in Netlify function:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      },
      body: JSON.stringify({ 
        error: 'Internal Server Error',
        message: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      })
    };
  }
});
