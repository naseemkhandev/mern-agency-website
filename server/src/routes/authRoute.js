import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
import validateError from '../middlewares/validateError.js';
import { loginSchema, registerSchema } from '../validations/authValidation.js';
const router = express.Router();

router.post('/register', validateError(registerSchema), registerUser);
router.post('/login', validateError(loginSchema), loginUser);

export default router;
