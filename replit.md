# Overview

This is a full-stack web application built as a portfolio website for Edoardo Maioli, an Android Automotive Software Developer. The project showcases a modern React frontend with a Node.js/Express backend, featuring a clean and responsive design. The application displays professional information including work experience, education, technical skills, projects, and contact details through a single-page layout with smooth navigation.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React with TypeScript**: Single-page application built using React 18 with TypeScript for type safety
- **Vite Build System**: Fast development server and optimized production builds
- **Component Structure**: Modular component architecture with dedicated sections (Hero, About, Skills, Experience, Education, Projects, Contact, Footer)
- **UI Framework**: shadcn/ui components built on Radix UI primitives for accessibility and customization
- **Styling**: Tailwind CSS with custom design system including CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing

## Backend Architecture
- **Express.js Server**: RESTful API server with TypeScript support
- **Modular Route System**: Centralized route registration in `server/routes.ts`
- **Storage Interface**: Abstract storage layer with in-memory implementation for user data
- **Development Setup**: Vite integration for seamless development experience with HMR
- **Request Logging**: Custom middleware for API request logging and performance monitoring

## Data Layer
- **Database ORM**: Drizzle ORM configured for PostgreSQL with type-safe queries
- **Schema Definition**: Centralized schema definitions in `shared/schema.ts` with Zod validation
- **Migration System**: Drizzle Kit for database migrations and schema management
- **Connection**: Neon Database serverless PostgreSQL integration

## Development & Build System
- **TypeScript Configuration**: Strict type checking with path mapping for clean imports
- **Build Pipeline**: Separate client and server builds with ESBuild for server bundling
- **Development Tools**: Hot module replacement, error overlays, and Replit-specific tooling
- **Code Quality**: Consistent formatting and linting setup

## External Dependencies

- **UI Components**: Radix UI primitives for accessible component foundation
- **Styling**: Tailwind CSS for utility-first styling approach
- **Database**: Neon Database (PostgreSQL) for data persistence
- **ORM**: Drizzle ORM for type-safe database operations
- **Validation**: Zod for runtime type validation and schema definition
- **State Management**: TanStack Query for server state and caching
- **Development**: Vite for build tooling and development server
- **Fonts**: Google Fonts integration (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono)
- **Icons**: Lucide React for consistent iconography
- **Deployment**: Replit-specific configurations and tooling for hosting