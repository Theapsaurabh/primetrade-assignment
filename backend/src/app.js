const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const connectDB = require('./config/database');
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');


connectDB();

const app = express();


app.use((req, res, next) => {
  
  const allowedOrigins = ['http://localhost:3000', 'http://127.0.0.1:3000'];
  const origin = req.headers.origin;
  
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept, Origin, X-Requested-With');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  
  console.log(`🌐 CORS Headers set for: ${origin}`);
  
 
  if (req.method === 'OPTIONS') {
    console.log('🛬 Handling OPTIONS preflight request');
    return res.status(200).end();
  }
  
  next();
});


app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Task Manager API is running with CORS!',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    cors: 'Enabled'
  });
});




app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);


app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Endpoint not found: ${req.method} ${req.originalUrl}`
  });
});


app.use((error, req, res, next) => {
  console.error('Error:', error.message);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { error: error.message })
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  
  console.log(` Server started successfully!`);
  
});

module.exports = app;