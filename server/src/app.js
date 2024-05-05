import express from 'express';
import userRoute from './routes/authRoute.js';

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use('/', (req, res) => {
  res.send('<h1>Server is running...</h1>');
});

app.use('/api/auth', userRoute);

export default app;
