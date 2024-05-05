import app from './src/app.js';
import { config } from './src/config/config.js';

const startServer = async () => {
  try {
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
