import express from 'express';
import cors from 'cors';

import userRoute from './routes/authRoute.js';
import contactRoute from './routes/contactRoute.js';
import handleError from './middlewares/handleError.js';
import { config } from './config/config.js';

// Middlewares
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: config.clientUrl,
    credentials: true,
  }),
);

// Routes
app.get('/', (req, res) => {
  res.json('<h1>Server is running...</h1>');
});

app.use('/api/auth', userRoute);
app.use('/api/contact', contactRoute);

// Handling errors
app.use(handleError);

export default app;
