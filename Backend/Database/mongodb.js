import mongoose from 'mongoose'
import { MONGO_URI } from '../config/env.js'

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    console.log('MongoDB connected — PlateForm DB ready')
  } catch (error) {
    console.error('MongoDB connection error:', error.message)
    process.exit(1)
  }
}

export default connectDB