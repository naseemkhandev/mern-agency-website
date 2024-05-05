import express from 'express';
import cors from 'cors';

import authRoute from './routes/authRoute.js';
import userRoute from './routes/userRoute.js';
import contactRoute from './routes/contactRoute.js';
import handleError from './middlewares/handleError.js';
import { config } from './config/config.js';

// Middlewares
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: config.clientUrl,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }),
);

// Routes
app.get('/', (req, res) => {
  res.json('<h1>Server is running...</h1>');
});

app.use('/api/auth', authRoute);
app.use('/api/contact', contactRoute);
app.use('/api/users', userRoute);

// Handling errors
app.use(handleError);

export default app;
