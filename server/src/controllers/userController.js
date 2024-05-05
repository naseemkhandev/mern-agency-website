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
