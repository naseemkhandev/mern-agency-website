import User from '../models/User.js';
import createError from '../utils/createError.js';

export const registerUser = async (req, res, next) => {
  try {
    const { username, email, phone, password } = req.body;

    const user = await User.findOne({ email });
    if (user) return next(createError(400, 'User already exists'));

    const newUser = await User.create({ username, email, phone, password });

    res
      .status(201)
      .json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    next(error);
  }
};
