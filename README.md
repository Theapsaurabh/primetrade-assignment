# 🚀 TaskFlow - Modern Task Management Application

![Next.js](https://img.shields.io/badge/Next.js-14.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-18.0-green?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-7.0-green?style=for-the-badge&logo=mongodb)

A **full-stack task management application** built with modern technologies for seamless productivity and team collaboration.

---

## ✨ Features

### 🔐 Authentication & Security
- JWT-based Authentication with secure token management  
- Session Management with automatic expiration handling  
- Password Hashing using **bcryptjs**  
- Protected Routes with middleware-based authorization  
- Secure API with comprehensive error handling  

### 📝 Task Management
- Create, Read, Update, Delete tasks with intuitive UI  
- Advanced Filtering by **status, priority, and search terms**  
- Dual View Modes (**Grid & List**) for personalized experience  
- Real-time Status Updates with dropdown controls  
- Priority System with visual indicators (🔥 High, ⚡ Medium, 💤 Low)  
- Due Date Tracking with calendar integration  
- Bulk Operations for efficient task management  

### 🎨 User Experience
- **Dark/Light Mode** with system preference detection  
- Fully Responsive for all device sizes  
- Elegant **Loading States** and Skeleton Screens  
- Helpful **Empty States** with call-to-actions  
- Smooth Animations & Hover Effects for better interaction  

### 🛡️ Error Handling
- Comprehensive API Error Handling with user-friendly messages  
- Network Error Recovery with retry mechanisms  
- Real-time Form Validation feedback  
- Graceful Session Expiration handling with redirects  

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** – React framework with App Router  
- **TypeScript** – Type-safe JavaScript  
- **Tailwind CSS** – Utility-first CSS framework  
- **React Context** – State management  
- **Axios** – HTTP client for API calls  

### Backend
- **Node.js** – Runtime environment  
- **Express.js** – Web framework  
- **MongoDB** – NoSQL database  
- **Mongoose** – MongoDB object modeling  
- **JWT** – JSON Web Tokens for authentication  
- **bcryptjs** – Password hashing  

---

## 🚀 Quick Start

### 🧩 Prerequisites
- Node.js 18.0 or higher  
- MongoDB 5.0 or higher  
- npm or yarn  

### ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/your-username/taskflow.git
```

cd taskflow
Install dependencies
bash
Copy code
# Backend
```
cd backend
npm install

```

# Frontend
```
cd ../frontend
npm install
```
🧾 Environment Setup
Backend (.env)
```
env
Copy code
# Server Configuration
NODE_ENV=development
PORT=5000

# Database
MONGODB_URI=mongodb://localhost:27017/taskflow

# JWT
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRES_IN=7d

# CORS
CLIENT_URL=http://localhost:3000
Frontend (.env.local)
env
Copy code
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_API_LOG_LEVEL=debug
▶️ Start the Application
bash
Copy code
# Backend (from backend directory)
npm run dev

# Frontend (from frontend directory)
npm run dev
Frontend: http://localhost:3000

Backend API: http://localhost:5000
```

📁 Project Structure
```
text
Copy code
taskflow/
├── frontend/                 
│   ├── app/                 
│   │   ├── login/          
│   │   ├── register/       
│   │   └── dashboard/      
│   ├── components/         
│   │   ├── auth/          
│   │   └── dashboard/     
│   ├── contexts/          
│   │   └── AuthContext.tsx 
│   ├── lib/               
│   │   └── api.ts         
│   └── types/             
│
└── backend/                
    ├── controllers/        
    │   └── authController.js
    ├── middleware/         
    │   └── auth.js        
    ├── models/            
    │   └── User.js        
    ├── routes/            
    │   └── auth.js        
    └── config/            
        └── database.js    
🔌 API Endpoints
```
🧑‍💻 Authentication Endpoints
```
Method	Endpoint	Description	Auth Required
POST	/api/auth/register	User registration	No
POST	/api/auth/login	User login	No
GET	/api/auth/profile	Get user profile	Yes
PUT	/api/auth/profile	Update user profile	Yes
PUT	/api/auth/change-password	Change password	Yes
```
✅ Task Endpoints
```
Method	Endpoint	Description	Auth Required
GET	/api/tasks	Get all tasks (with filtering)	Yes
GET	/api/tasks/:id	Get single task	Yes
POST	/api/tasks	Create new task	Yes
PUT	/api/tasks/:id	Update task	Yes
DELETE	/api/tasks/:id	Delete task	Yes
PATCH	/api/tasks/:id/status	Update task status	Yes
PATCH	/api/tasks/:id/priority	Update task priority	Yes
```

### 🎯 Usage Guide

*** 🧍 Creating an Account *** 
Navigate to the registration page

Fill in your name, email, and password

Click "Create Account"

You’ll be logged in and redirected to the dashboard

### 🗂️ Managing Tasks
**Create a Task: Click “Add New Task”**

### Filter Tasks: Use search bar and filters

Update Status: Use the dropdown

Edit Task: Click the edit icon

Delete Task: Click the delete icon (with confirmation)

### 🧾 Task Properties
Property	Description
Title	Required short description
Description	Optional details
Status	Pending, In Progress, Completed
Priority	Low, Medium, High
Due Date	Optional deadline

🔧 Development
🧠 Running in Development Mode
```
bash
Copy code
# Backend with hot reload
cd backend
npm run dev
```

# Frontend with hot reload
```
cd frontend
npm run dev
```
🏗️ Building for Production

bash
Copy code
```
# Build frontend
cd frontend
npm run build
```

# Start production server
```
npm start
✅ Code Quality
bash
Copy code
# Linting
npm run lint
```

# Type Checking
npm run type-check
🐛 Troubleshooting
Issue	Possible Fix
MongoDB Connection Error	Ensure MongoDB is running & check .env connection string
JWT Token Issues	Verify JWT_SECRET & expiration settings
CORS Errors	Ensure CLIENT_URL matches frontend origin
Build Errors	Delete node_modules, reinstall dependencies

### 🤝 Contributing
** We welcome contributions! **

Fork the repository

Create your feature branch

bash
```
Copy code
git checkout -b feature/amazing-feature
Commit your changes
```

bash
Copy code
```
git commit -m "Add some amazing feature"
Push the branch
```

bash
```
Copy code
git push origin feature/amazing-feature
Open a Pull Request
```

🧩 Development Guidelines

Follow TypeScript best practices

Use meaningful commit messages

Write clear documentation

Test your changes thoroughly

📄 License
This project is licensed under the MIT License — see the LICENSE file for details.

### 🙏 Acknowledgments
Next.js team for the amazing framework

Tailwind CSS for the utility-first styling

MongoDB for reliable database solutions

All contributors who help improve this project

📞 Support
If you need help:

Check the Troubleshooting section

Search existing GitHub Issues

Create a new Issue with detailed info

<div align="center"> Built with ❤️ using <b>Next.js</b>, <b>TypeScript</b>, and <b>MongoDB</b> <br/><br/> ⭐ <b>Star us on GitHub if you find this project helpful!</b> ⭐ </div> ```
