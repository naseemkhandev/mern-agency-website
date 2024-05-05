import mongoose from 'mongoose';
import { config } from './config.js';

const connectDB = async () => {
  try {
    await mongoose
      .connect(config.backendUrl)
      .then(() => console.log('Successfully Connected to MongoDB'))
      .catch((err) => console.log('Error in connecting to Database: ', err));
  } catch (error) {
    console.log('Failed to connect to Database: ', error);
    process.exit(1);
  }
};

export default connectDB;
