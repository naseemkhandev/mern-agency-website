import express from 'express';
import { contactUser } from '../controllers/contactController.js';
const router = express.Router();

router.post('/contact', contactUser);

export default router;
