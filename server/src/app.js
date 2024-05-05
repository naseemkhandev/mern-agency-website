import express from 'express';

import userRoute from './routes/authRoute.js';
import contactRoute from './routes/contactRoute.js';
import handleError from './middlewares/handleError.js';

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json('<h1>Server is running...</h1>');
});

app.use('/api/auth', userRoute);
app.use('/api/contact', contactRoute);

// Handling errors
app.use(handleError);

export default app;
