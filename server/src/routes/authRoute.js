import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
import validateError from '../middlewares/validateError.js';
import { registerSchema } from '../validations/authValidation.js';
const router = express.Router();

router.post('/register', validateError(registerSchema), registerUser);
router.post('/login', loginUser);

export default router;
