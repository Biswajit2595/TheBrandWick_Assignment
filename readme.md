# The Brand wick Assignment - Secure Login and Signup Solution

## Introduction

This project aims to provide a seamless user experience with JWT token-based login authentication, ensuring data privacy and security measures.

## Table of Contents
- [Links](#links)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Problem Statement](#problem-statement)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)


### Problem Statement

The goal of Authify is to implement a robust login authentication system with JWT tokens. The specific requirements include:

- **Signup API:**
  - Collect user details such as name, username, email, phone, and password during signup.

- **Login API:**
  - Implement a secure login API using JWT tokens for authentication.

## Links

- **Website URL:** [The Brand Wick](https://thebrandwick.vercel.app/)
- **Backend Deployed URL:** [Brand wick_Api](https://thebrandwick.onrender.com)

## Features

### Secure Signup:

- Collect user information securely, including name, username, email, phone, and password.
- Validate user inputs and display meaningful errors on the frontend.
- Ensure unique email registrations to prevent duplication.

### JWT Token Authentication:

- Implement a secure login API using JWT tokens for user authentication.
- Provide a seamless and secure login experience for users.

## Tech Stack

- **Backend (Node.js):**
  - Express.js: Fast, unopinionated, minimalist web framework for Node.js.
  - JSON Web Token (JWT): Securely transmit information between parties as JSON objects.
  - MongoDB: NoSQL database for storing user information securely.

- **Frontend (React.js):**
  - Chakra UI: Modern React component library for crafting visually appealing interfaces.

## Installation

Follow the steps below to set up Brandwick Assignment locally:

## Frontend

1. **Navigate to the frontend folder:**
    ```bash
    cd frontend
    ```

2. **Install frontend dependencies:**
    ```bash
    npm install
    ```

3. **Start the frontend application:**
    ```bash
    npm run dev
    ```

## Backend

1. **Navigate to the backend folder:**
    ```bash
    cd backend
    ```

5. **Install backend dependencies:**
    ```bash
    npm install
    ```

6. **Start the backend server:**
    ```bash
    npm run server
    ```

### **API Endpoints**

- `POST /api/user/signup` - Register a new user.
- `POST /api/user/login` - Log in for existing user.


