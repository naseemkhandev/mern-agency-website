import User from '../models/User.js';

export const registerUser = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: 'User already exists' });

    const newUser = await User.create({ username, email, phone, password });

    res
      .status(201)
      .json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.log(error);
  }
};
