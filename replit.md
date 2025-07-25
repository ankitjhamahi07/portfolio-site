# Replit.md

## Overview

This is a modern, SEO-optimized static portfolio website built for Ankit Kumar Jha, a Software Development Engineer III. The application features a responsive design with dark theme as default (with light mode toggle), beautiful animations, and comprehensive sections showcasing backend development expertise. Includes complete career journey from intern to SDE-3 at NineLeaps and enhanced tech proficiency section with animated progress bars instead of percentages. Built as a pure frontend React application optimized for Git deployment to Netlify.

## Recent Changes

✓ Converted to static website - removed backend dependencies for Netlify deployment
✓ Added netlify.toml configuration for proper build and deployment settings
✓ Created comprehensive README.md with deployment instructions
✓ Removed server-side components and made app purely client-side
✓ Updated career progression to show complete journey: Intern → MTS-II → SDE-1 → SDE-3 (2019-Present)
✓ Enhanced tech proficiency section with animated progress bars, skill levels, and descriptions
✓ Set dark theme as default loading theme with proper initialization
✓ Added promotion badges and career statistics
✓ Improved visual design with better color coding and animations

## User Preferences

Preferred communication style: Simple, everyday language.
Design preferences: Dark theme as default with light mode toggle, creative JS developer elements, beautiful animations
Content focus: Backend development, Node.js expertise, scalable systems
Career progression: Intern → MTS-II → SDE-1 → SDE-3 at NineLeaps (July 2019 - Present)
Tech proficiency: Use graphs/icons instead of percentages, show skill levels visually

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system using CSS variables
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon Database)
- **Session Management**: In-memory storage with interface for future database integration
- **API Design**: RESTful API pattern with /api prefix

### Development Environment
- **Package Manager**: npm with lockfile version 3
- **TypeScript Configuration**: Strict mode enabled with ES modules
- **Development Server**: Vite dev server with hot module replacement
- **Production Build**: esbuild for server bundling, Vite for client bundling

## Key Components

### Database Schema (`shared/schema.ts`)
- **Users Table**: Basic user entity with id, username, and password fields
- **Validation**: Zod schemas for runtime validation and type inference
- **Migrations**: Drizzle migrations stored in `/migrations` directory

### Client Application
- **Single Page Application**: Portfolio website with multiple sections
- **Components**: Modular React components for Hero, About, Skills, Projects, Experience, Blogs, and Contact sections
- **Responsive Design**: Mobile-first approach with Tailwind responsive utilities
- **Animations**: Custom scroll animations and CSS transitions
- **Theme**: Dark theme with custom color palette focused on developer aesthetics

### Server Infrastructure
- **Route Management**: Centralized route registration in `server/routes.ts`
- **Storage Interface**: Abstract storage interface allowing for easy switching between memory and database storage
- **Development Features**: Request logging, error handling middleware, and Vite integration for development

### Shared Code
- **Type Safety**: Shared TypeScript types between client and server
- **Schema Validation**: Centralized data validation using Zod

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **Server Processing**: Express.js handles requests with middleware pipeline
3. **Data Storage**: Currently uses in-memory storage with interface for database integration
4. **Response Handling**: JSON responses with proper error handling
5. **State Management**: Client-side state managed by React Query with caching

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Query for state management
- **Database**: Drizzle ORM with PostgreSQL dialect, Neon Database driver
- **UI Framework**: Radix UI primitives with shadcn/ui components
- **Styling**: Tailwind CSS with PostCSS for processing

### Development Tools
- **TypeScript**: Full type safety across the stack
- **Vite**: Development server and build tool with React plugin
- **ESBuild**: Fast server bundling for production
- **Development Enhancements**: specific plugins for error handling and debugging

### Utility Libraries
- **Form Handling**: React Hook Form with Hookform resolvers
- **Date Management**: date-fns for date formatting and manipulation
- **Class Management**: clsx and class-variance-authority for conditional styling
- **Icons**: Lucide React for consistent iconography

## Deployment Strategy

### Development Mode
- **Concurrent Processes**: Vite dev server for frontend, tsx for backend development
- **Hot Reloading**: Full hot module replacement for both client and server code
- **Development Middleware**: Vite middleware integration for seamless development experience

### Production Build
1. **Client Build**: Vite builds optimized React application to `dist/public`
2. **Server Build**: ESBuild bundles server code to `dist/index.js`
3. **Static Serving**: Express serves built client files in production
4. **Database**: PostgreSQL connection via environment variable configuration

### Environment Configuration
- **Development**: NODE_ENV=development with tsx for TypeScript execution
- **Production**: NODE_ENV=production with compiled JavaScript execution
- **Database**: DATABASE_URL environment variable for PostgreSQL connection
- **Build Process**: Separate build commands for type checking, client, and server bundling

The architecture prioritizes developer experience with full TypeScript support, fast development cycles, and a clear separation between client and server code while maintaining shared type safety throughout the application.