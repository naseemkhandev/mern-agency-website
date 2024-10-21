import express from 'express';
import {
  loginUser,
  logoutUser,
  registerUser,
} from '../controllers/authController.js';
import validateError from '../middlewares/validateError.js';
import { loginSchema, registerSchema } from '../validations/authValidation.js';
const router = express.Router();

router.post('/register', validateError(registerSchema), registerUser);
router.post('/login', validateError(loginSchema), loginUser);
router.post('/logout', logoutUser);

export default router;
