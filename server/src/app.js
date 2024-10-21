import cors from 'cors';
import express from 'express';

import { config } from './config/config.js';
import handleError from './middlewares/handleError.js';
import authRoute from './routes/authRoute.js';
import contactRoute from './routes/contactRoute.js';
import userRoute from './routes/userRoute.js';

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

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/contact', contactRoute);
app.use('/api/v1/users', userRoute);

// Handling errors
app.use(handleError);

export default app;
