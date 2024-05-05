import express from 'express';
import userRoute from './routes/authRoute.js';
import handleError from './middlewares/handleError.js';

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json('<h1>Server is running...</h1>');
});

app.use('/api/auth', userRoute);

// Handling errors
app.use(handleError);

export default app;
