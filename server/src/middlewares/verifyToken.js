import jwt from 'jsonwebtoken';

import createError from '../utils/createError.js';
import { config } from '../config/config.js';
import User from '../models/User.js';

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer', '').trim();
  if (!token) return next(createError(401, 'You are not authenticated!'));

  try {
    jwt.verify(token, config.jwtSecret, async (err, user) => {
      if (err) return next(createError(403, 'Token is not valid!'));

      const userData = await User.findById(user.userId).select('-password');

      req.user = userData;
      req.userId = user.userId;
      req.isAdmin = user.isAdmin;
      req.token = token;
      next();
    });
  } catch (error) {
    next(createError(401, 'You are not authenticated!'));
  }
};

export default verifyToken;
