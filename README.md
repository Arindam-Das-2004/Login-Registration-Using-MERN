# MERN Authentication System 🔐

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![MERN Stack](https://img.shields.io/badge/MERN-MongoDB%20Express%20React%20Node.js-47A248)](https://www.mongodb.com/mern-stack)
[![JWT Auth](https://img.shields.io/badge/JWT-Authentication-000000?logo=JSON%20web%20tokens)](https://jwt.io)

A complete authentication system built with the MERN stack (MongoDB, Express, React, and Node.js). This project demonstrates secure user registration, login, and JWT-based authentication with form validation and responsive UI.

## � Motivation
- Learn full-stack development by connecting frontend and backend
- Understand secure authentication flows
- Implement JWT for session management
- Practice building production-ready MERN applications
- Create a template for future projects requiring authentication

## ✨ Features
- ✅ User registration with validation
- 🔑 Secure login with JWT authentication
- 🛡️ Protected routes for authorized users
- 📱 Responsive UI with Bootstrap 5
- 📡 Axios for API communication
- ♻️ React Router for client-side navigation
- 🗃️ MongoDB for data persistence

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas URI)
- npm/yarn/pnpm

### Installation

#### Frontend Setup
```bash
# Create React app with Vite
npm create vite@latest frontend --template react
cd frontend

# Install dependencies
npm install bootstrap axios react-router-dom

# Start development server
npm run dev

# Initialize Node.js project
mkdir backend
cd backend
npm init -y

# Install dependencies
npm install express mongoose cors nodemon jsonwebtoken bcryptjs validator

# Create start script in package.json
# "scripts": {
#   "start": "nodemon index.js"
# }

# Start backend server
npm start

npm run dev    # Start development server
npm run build  # Create production build
npm run preview # Preview production build