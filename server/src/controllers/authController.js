import bcrypt from 'bcrypt';

import User from '../models/User.js';
import createError from '../utils/createError.js';

export const registerUser = async (req, res, next) => {
  try {
    const { username, email, phone, password } = req.body;

    const user = await User.findOne({ email });
    if (user) return next(createError(400, 'User already exists'));

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      phone,
      password: hashedPassword,
    });

    const { password: userPassword, ...userInfo } = newUser._doc;

    res
      .status(201)
      .json({ message: 'User registered successfully', user: userInfo });
  } catch (error) {
    next(error);
  }
};
