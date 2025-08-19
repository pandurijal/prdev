# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a monorepo with two main components:
- `web/` - React frontend built with Vite, TypeScript, and Tailwind CSS
- `api/` - Cloudflare Worker backend using Neon PostgreSQL database

## Development Commands

### Root Level (orchestration)
- `npm run install:all` - Install dependencies for all packages
- `npm run dev:web` - Start web development server
- `npm run build:web` - Build web frontend for production
- `npm run dev:api` - Start API development server using Wrangler
- `npm run deploy:api` - Deploy API to Cloudflare Workers

### Web Frontend (`cd web/`)
- `npm run dev` - Start Vite development server (usually runs on port 5173)
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

### API Backend (`cd api/`)
- `npm run dev` - Start Wrangler development server
- `npm run deploy` - Deploy to Cloudflare Workers

## Architecture Overview

### Frontend (web/)
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with PostCSS
- **Build Tool**: Vite
- **Structure**: Single-page application with component-based architecture
- **Components**: Located in `src/components/` - modular landing page sections (Header, Hero, Services, Products, Clients, WhyChooseUs, Contact, Footer)

### Backend (api/)
- **Runtime**: Cloudflare Workers
- **Database**: Neon PostgreSQL (serverless)
- **Main Functions**: 
  - `/api/email-capture` - Captures emails for lead generation with metadata tracking
  - `/api/form-submission` - Handles contact form submissions
- **Features**: CORS handling, email validation, IP geolocation, product detection from referrer URLs

### Database Schema
- `email_captures` table for lead generation
- `form_submissions` table for contact forms
- Both tables include metadata tracking (IP, country, user agent, product source)

## Key Technologies
- **Frontend**: React, TypeScript, Vite, Tailwind CSS, Lucide React (icons)
- **Backend**: Cloudflare Workers, Neon Database (@neondatabase/serverless)
- **Tooling**: ESLint, PostCSS, Wrangler

## Development Notes
- The API includes product detection logic for multiple domains/products in the `extractProduct` function
- Database URL is configured in `wrangler.toml` (should be moved to environment variables for production)
- Frontend components are modular and represent different sections of a landing page
- CORS is configured to allow all origins (`*`) in the API