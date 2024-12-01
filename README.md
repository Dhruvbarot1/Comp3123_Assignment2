
# Comp3123 Assignment 2

This repository contains the full-stack development project for **Comp3123 Assignment 2**, which includes a backend built with Node.js, Express, and MongoDB, and a frontend built with React.js.

## Features

- **Backend**:
  - RESTful APIs for employee and user management.
  - CRUD operations on employees (Add, View, Update, Delete).
  - User authentication with signup and login functionality.
  - MongoDB database integration.

- **Frontend**:
  - User-friendly React.js interface.
  - Login and Signup functionality.
  - Employee management features (View, Add, Edit, Delete).
  - Modern and responsive UI.

## Technologies Used

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - JSON Web Token (JWT)
  - bcrypt.js

- **Frontend**:
  - React.js
  - Axios
  - React Router DOM

## How to Run

### Backend:
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```

### Frontend:
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```

## API Endpoints

### User Management
- **POST** `/api/auth/signup`: Create a new user.
- **POST** `/api/auth/login`: Authenticate a user.

### Employee Management
- **GET** `/api/employees`: Get all employees.
- **GET** `/api/employees/:id`: Get employee by ID.
- **POST** `/api/employees`: Add a new employee.
- **PUT** `/api/employees/:id`: Update an employee.
- **DELETE** `/api/employees/:id`: Delete an employee.

## Folder Structure
```
Assignment2/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
└── README.md
```

## Author
- [Dhruv Barot](https://github.com/Dhruvbarot1)
