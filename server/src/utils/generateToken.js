import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';

const generateToken = (user) => {
  return jwt.sign(
    {
      userId: user._id.toString(),
      isAdmin: user.isAdmin,
    },
    config.jwtSecret,
    {
      expiresIn: '30d',
    },
  );
};

export default generateToken;
