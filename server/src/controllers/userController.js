import User from '../models/User.js';

export const getSingleUser = async (req, res, next) => {
  try {
    const user = req.user;

    res.status(200).json({
      message: 'User fetched successfully',
      user: user,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}).select('-password');

    res.status(200).json({
      message: 'Users fetched successfully',
      users: users,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    if (req.isAdmin) return await User.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: 'User has been deleted successfully' });
  } catch (error) {
    next(error);
  }
};
