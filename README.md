# Fable - Interactive Book & Anime Platform

## Overview
Fable is a modern web application built with React that showcases books and anime content with interactive UI elements. The platform features dynamic carousels, glowing UI effects, and user authentication.

## Features
- 📚 Interactive Book Carousel
- 🎬 Anime/Movie Showcase with OMDB API Integration
- ✨ Dynamic Glowing Effect UI Components
- 🔐 Auth0 Authentication
- 📱 Fully Responsive Design
- 🎨 Dark Mode Support

## Tech Stack
- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Authentication**: Auth0
- **Build Tool**: Vite
- **API Integration**: Axios
- **State Management**: React Query

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn



The application will be available at `http://localhost:8080`

## Project Structure
```
src/
├── components/        # Reusable UI components
├── pages/            # Page components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
└── types/           # TypeScript type definitions
```

## Key Components
- **BookCarousel**: Interactive book showcase component
- **MovieCarousel**: Dynamic anime/movie display with OMDB API integration
- **GlowingEffectDemo**: Advanced UI effect demonstration
- **LoginForm**: Authentication interface

## Environment Variables
The project requires the following environment variables:
- OMDB API key (currently hardcoded in MovieCarousel component)

## Features in Detail

### Book & Anime Showcase
- Dynamic carousels with smooth animations
- Movie data fetching from OMDB API
- Interactive card layouts with hover effects

### Glowing Effect Component
- Dynamic cursor-following glow effect
- Customizable colors and animations
- Responsive to user interaction

### Authentication
- Secure user authentication with Auth0
- Protected routes
- User profile management

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## Acknowledgments
- shadcn/ui for the beautiful UI components
- OMDB API for movie data
- Auth0 for authentication services
- Framer Motion for smooth animations

