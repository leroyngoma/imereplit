# International Medical Exchange (IME) Website

## Overview

This is a full-stack web application for the International Medical Exchange (IME), a nonprofit organization founded in 1997 that focuses on healthcare initiatives across Africa and underserved communities in the U.S. The application serves as the organization's main website, prominently featuring their flagship AI4African Health Initiative, showcasing their mission, programs, leadership, webinars, and providing enhanced donation functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with a React frontend and Express.js backend, built for deployment on Replit. It uses a monorepo structure with separate client and server directories, along with shared components.

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: TailwindCSS with custom IME brand colors
- **UI Components**: Radix UI components with shadcn/ui styling system
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Storage**: In-memory storage with plans for PostgreSQL session store
- **Development**: Hot reloading with Vite integration

## Key Components

### Frontend Components
- **Navigation**: Responsive navigation with mobile menu, updated to highlight AI4African Health Initiative
- **Hero Carousel**: Auto-rotating image carousel featuring AI4African Health Initiative as the primary slide
- **AI4African Health Section**: Dedicated flagship initiative section with investment details, components, and impact projections
- **Enhanced Board Section**: Interactive board member profiles with detailed biography modals and "Learn More" buttons
- **Webinars Section**: Educational resource library with YouTube integration for webinar access
- **Enhanced Donation Section**: Dropdown-based donation selection with custom amount option
- **Content Sections**: About, Programs, Board/Leadership, Partners, News, Contact
- **UI Library**: Complete shadcn/ui component library including forms, dialogs, cards, select components, etc.

### Backend Infrastructure
- **API Routes**: RESTful API structure (currently minimal)
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database persistence
- **User Management**: Basic user schema with authentication preparation

### Shared Resources
- **Database Schema**: Drizzle schema definitions for users table
- **Type Safety**: Shared TypeScript types between frontend and backend

## Data Flow

1. **Client Requests**: Frontend makes API calls through TanStack Query
2. **API Processing**: Express server handles requests and interacts with storage layer
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: Structured JSON responses with error handling
5. **State Updates**: TanStack Query manages client-side cache and updates

## External Dependencies

### Database & Infrastructure
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle Kit**: Database migrations and schema management

### UI & Styling
- **Radix UI**: Accessible component primitives
- **TailwindCSS**: Utility-first CSS framework
- **Lucide React**: Icon library

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety and developer experience
- **ESBuild**: Backend bundling for production

## Deployment Strategy

### Development Environment
- **Replit Integration**: Custom Vite plugins for Replit development
- **Hot Reloading**: Full-stack hot reloading with Vite middleware
- **Error Handling**: Runtime error overlay for development

### Production Build
- **Frontend**: Vite builds optimized React application to `dist/public`
- **Backend**: ESBuild bundles Express server to `dist/index.js`
- **Static Assets**: Frontend assets served by Express in production

### Database Management
- **Migrations**: Drizzle Kit manages database schema changes
- **Environment**: DATABASE_URL environment variable for connection
- **Development**: `db:push` command for schema synchronization

### Key Architectural Decisions

1. **Monorepo Structure**: Chosen for code sharing between frontend and backend, enabling type-safe APIs and shared utilities

2. **Drizzle ORM**: Selected over alternatives like Prisma for its lightweight nature and excellent TypeScript integration, preparing for PostgreSQL while supporting development with in-memory storage

3. **Vite + Express Integration**: Provides excellent development experience with hot reloading while maintaining production flexibility

4. **TanStack Query**: Handles complex async state management, caching, and background updates for optimal user experience

5. **shadcn/ui Components**: Provides consistent, accessible UI components that are customizable and maintainable

6. **Storage Abstraction**: Interface-based storage design allows switching between in-memory development storage and PostgreSQL production storage without code changes

## Recent Changes (January 2025)

### AI4African Health Initiative Integration
- Made AI4African Health Initiative the primary focus of the website
- Updated hero carousel to feature the initiative as the first slide
- Created dedicated AI4African Health section with $2.5M investment details, strategic alignment, and impact projections
- Added navigation links to prominently feature the initiative

### Enhanced User Experience
- Implemented interactive board member profiles with detailed biography modals
- Added "Learn More" buttons for each director with extensive background information
- Created comprehensive webinars section with YouTube integration for educational content
- Enhanced donation functionality with dropdown selection and custom amount input

### Content Expansion
- Added strategic partner information and technology collaboration details
- Integrated webinar library showcasing IME's educational initiatives
- Updated navigation to include direct access to AI4African Health and webinars
- Improved mobile navigation with all new sections included

### Recent Updates (January 30, 2025)

#### Logo and Branding Enhancement
- Created custom IME logo inspired by exchange symbol with integrated medical cross
- Logo combines teal and blue exchange elements with gold medical cross
- Updated navigation to use new branded logo instead of generic heart icon

#### AI4African Health Initiative Refinements
- Removed sensitive investment information ($2.5M details) from public display
- Created comprehensive signup system for interested parties and potential partners
- Added dedicated signup page with detailed contact forms for lead generation
- Implemented separate tracks for "Learn More" vs "Partnership" inquiries
- Enhanced call-to-action buttons to direct to appropriate signup forms

#### Visual Content Updates
- Replaced all stock photos with images featuring African healthcare professionals
- Updated hero carousel images to show African doctors using AI technology
- Enhanced webinar thumbnails to focus on African healthcare and AI themes
- Improved programs section images to highlight African medical training and outreach
- Updated news section images to emphasize African healthcare leadership

#### User Experience Improvements
- Created comprehensive contact information capture system
- Added interest-based categorization for better lead qualification
- Implemented newsletter and update subscription options
- Added proper form validation and success states for signup process