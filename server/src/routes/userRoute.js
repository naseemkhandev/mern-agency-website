import express from 'express';
import { getSingleUser } from '../controllers/userController.js';
import verifyToken from '../middlewares/verifyToken.js';
const router = express.Router();

router.get('/verify', verifyToken, getSingleUser);

export default router;
