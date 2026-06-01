import mongoose from 'mongoose';
import { MONGO_URI} from '../config/env.js';
import dotenv from 'dotenv'
dotenv.config();

if(!MONGO_URI){
  throw new Error('Please specify the MONGO DB_URI environment variable inside .env<development/production>.local');

}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    console.log('MongoDB connected — PlateForm DB ready')
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
}

export default connectToDatabase