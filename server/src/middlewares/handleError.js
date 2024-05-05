import { config } from '../config/config.js';

const handleError = (err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || 'Something went wrong';

  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: message,
    stack: config.env === 'development' ? err.stack : '',
  });
};

export default handleError;
