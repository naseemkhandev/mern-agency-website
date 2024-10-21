import bcrypt from 'bcrypt';

import User from '../models/User.js';
import createError from '../utils/createError.js';
import generateToken from '../utils/generateToken.js';

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
    const access_token = generateToken(newUser);

    res
      .cookie('access_token', access_token, {
        httpOnly: true,
        sameSite: 'strict',
      })
      .status(201)
      .json({
        message: 'User registered successfully',
        user: userInfo,
        access_token: access_token,
      });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return next(createError(404, 'Wrong Credentials'));

    const decryptedPassword = await bcrypt.compare(password, user.password);
    if (!decryptedPassword) return next(createError(401, 'Wrong Credentials'));

    const { password: userPassword, ...userInfo } = user._doc;
    const access_token = generateToken(user);

    res
      .cookie('access_token', access_token, {
        httpOnly: true,
        sameSite: 'strict',
      })
      .status(200)
      .json({
        message: 'Login Successfull',
        user: userInfo,
        access_token: access_token,
      });
  } catch (error) {
    next(error);
  }
};

export const logoutUser = (req, res, next) => {
  try {
    res.clearCookie('access_token').status(200).json({ message: 'Logged Out' });
  } catch (error) {
    next(error);
  }
};
