import express from 'express';
import {
  getSingleUser,
  getAllUsers,
  deleteUser,
} from '../controllers/userController.js';
import verifyToken from '../middlewares/verifyToken.js';
const router = express.Router();

router.get('/verify', verifyToken, getSingleUser);
router.get('/', verifyToken, getAllUsers);
router.delete('/:id', verifyToken, deleteUser);

export default router;
