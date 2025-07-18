# XPZone Gaming Café Management System

## Overview

This is a full-stack web application for managing a gaming café called "XPZone" located in Patna. The system provides comprehensive management of gaming sessions, user accounts, payments, tournaments, and store operations. It features a modern dark theme with neon accents to match the gaming aesthetic.

## User Preferences

Preferred communication style: Simple, everyday language.
Contact Information: harshithardik312@gmail.com, +91 9431831261

## System Architecture

The application follows a monorepo structure with a clear separation between client and server code:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom neon color variables
- **UI Components**: Radix UI primitives with custom styling (shadcn/ui)
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Development**: TSX for TypeScript execution in development

## Key Components

### Database Schema
The system uses a PostgreSQL database with the following main entities:
- **Users**: Customer accounts with wallet balance, XP points, and levels
- **Prepaid Cards**: Time-based gaming cards (299, 499, 999 packages)
- **Wallet Transactions**: UPI payment tracking and balance management
- **Memberships**: Premium plans (Bronze, Silver, Gold, Pro Plus)
- **Gaming Sessions**: Track user gaming time and activities
- **Tournaments**: Esports competitions and events

### API Structure
RESTful API endpoints organized by resource:
- `/api/users/*` - User management and profiles
- `/api/prepaid-cards/*` - Prepaid card operations
- `/api/wallet/*` - Wallet and payment operations
- `/api/memberships/*` - Premium membership management
- `/api/gaming-sessions/*` - Session tracking
- `/api/tournaments/*` - Tournament management

### UI Components
Custom neon-themed components built on Radix UI:
- **NeonButton**: Gradient buttons with glow effects
- **NeonCard**: Cards with animated neon borders
- **Gaming-themed icons**: Emojis and Lucide icons for gaming context

## Data Flow

1. **User Registration/Login**: Users create accounts with email/phone verification
2. **Payment Processing**: UPI wallet top-ups and prepaid card purchases
3. **Gaming Sessions**: Time tracking with automatic deduction from cards/wallet
4. **XP System**: Experience points awarded based on gaming activity
5. **Tournament Participation**: Registration and bracket management
6. **Store Operations**: Gaming accessories and merchandise sales

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework

### Development Tools
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production
- **drizzle-kit**: Database migration and schema management

### Gaming-Specific Features
- **Real-time stats**: Live gaming statistics and leaderboards
- **Tournament system**: Bracket generation and management
- **XP/Level system**: Gamification with rewards
- **Time tracking**: Precise session monitoring

## Deployment Strategy

### Development Environment
- **Local Development**: `npm run dev` starts both frontend and backend
- **Database**: Drizzle migrations with `npm run db:push`
- **Type Checking**: `npm run check` for TypeScript validation

### Production Build
- **Frontend**: Vite builds optimized React application
- **Backend**: esbuild bundles Node.js server with external dependencies
- **Database**: PostgreSQL with connection pooling via Neon

### Architecture Decisions

1. **Monorepo Structure**: Shared types between client and server in `/shared` directory
2. **Database Choice**: PostgreSQL for ACID compliance and complex queries needed for gaming data
3. **ORM Selection**: Drizzle for type safety and performance over traditional ORMs
4. **State Management**: TanStack Query for server state, avoiding global client state
5. **Styling Approach**: Tailwind with custom CSS variables for consistent theming
6. **Component Library**: Radix UI for accessibility with custom gaming aesthetics

The system is designed to handle real-time gaming operations while maintaining data consistency and providing an engaging user experience for gamers.