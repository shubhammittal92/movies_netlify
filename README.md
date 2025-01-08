Netflix GPT
A dynamic React-based web application inspired by Netflix, enhanced with GPT-powered movie suggestions. This project integrates cutting-edge tools and APIs, ensuring an engaging and seamless user experience.

Features
Authentication
Sign Up & Login

User-friendly forms with validation.
Firebase integration for account creation and authentication.
Redirects users to the Browse page after successful login.
Sign Out & Profile Management

Update profile information, including display name and profile picture.
Redirect unauthenticated users to the login page.
Movie Browsing
Main Movie Display

Auto-playing and muted trailers fetched via TMDB APIs.
Dynamic title, description, and visuals.
Movie Lists

Fetch and display popular and "Now Playing" movies from TMDB.
Interactive movie cards with enhanced UI.
NetflixGPT
Search Functionality

GPT-powered movie suggestions based on user input.
Integrated OpenAI and TMDB APIs for accurate recommendations.
Multi-Language Support

Expanded accessibility with support for multiple languages.
Responsive Design
Fully responsive layout built with TailwindCSS for seamless usage on any device.
Tech Stack
Frontend: React, TailwindCSS
State Management: Redux with userSlice, movieSlice, and gptSlice
Authentication & Database: Firebase
APIs:
TMDB for movies and trailers
OpenAI for GPT-based suggestions
Utilities: Custom hooks (useRef, usePopularMovies) and memoization for performance optimization
