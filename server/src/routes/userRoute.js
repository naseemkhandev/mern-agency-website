import express from 'express';
import { getSingleUser,getAllUsers } from '../controllers/userController.js';
import verifyToken from '../middlewares/verifyToken.js';
const router = express.Router();

router.get('/verify', verifyToken, getSingleUser);
router.get('/', verifyToken, getAllUsers);

export default router;
