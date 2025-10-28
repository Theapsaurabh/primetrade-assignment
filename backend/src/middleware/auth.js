const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  try {
    let token;
    
   
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

   
    else if (req.cookies?.token) {
      token = req.cookies.token;
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'ACCESS_DENIED: No authentication token provided',
        error: true
      });
    }

    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    
    const user = await User.findById(decoded.id).select('-password');
    
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'SESSION_EXPIRED: User no longer exists',
        error: true
      });
    }

    
    req.user = user;
    next();

  } catch (error) {
    console.error('Auth middleware error:', error);

    
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({
        success: false,
        message: 'SESSION_EXPIRED: Invalid authentication token',
        error: true
      });
    }

    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'SESSION_EXPIRED: Authentication token has expired',
        error: true
      });
    }

    
    return res.status(401).json({
      success: false,
      message: 'SESSION_EXPIRED: Not authorized to access this route',
      error: true
    });
  }
};


const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'ACCESS_DENIED: Not authorized to access this route',
        error: true
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `ACCESS_DENIED: User role ${req.user.role} is not authorized to access this route`,
        error: true
      });
    }

    next();
  };
};


const optionalAuth = async (req, res, next) => {
  try {
    let token;
    
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies?.token) {
      token = req.cookies.token;
    }

    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id).select('-password');
      
      if (user) {
        req.user = user;
      }
    }

    next();
  } catch (error) {
    
    next();
  }
};

module.exports = {
  protect,
  authorize,
  optionalAuth
};