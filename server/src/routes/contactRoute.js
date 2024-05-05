import express from 'express';
import { contactUser } from '../controllers/contactController.js';
import validateError from '../middlewares/validateError.js';
import { contactSchema } from '../validations/contactValidation.js';
const router = express.Router();

router.post('/contact', validateError(contactSchema), contactUser);

export default router;
