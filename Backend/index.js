import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import { errorHandler } from './middlewares/errorMiddleware.js';
import cors from 'cors';
import lectureRoutes from './routes/lectureRoutes.js';
import spokenLectureRoutes from './routes/spokenLectureRoute.js';
import courseRoutes from './routes/courseRoutes.js';
import certificateRoutes from './routes/certificateRoutes.js';
import notesRoute from './routes/notesRoute.js';
import { createServerlessHandler } from './vercelHandler.js'; // Make sure this file exists

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/lectures', lectureRoutes);
app.use('/api/spoken-lectures', spokenLectureRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/certificates', certificateRoutes);
app.use('/api/notes', notesRoute);

// Error Handling
app.use(errorHandler);

// MongoDB connection (only once)
let isConnected = false;
const connectToDB = async () => {
  if (!isConnected) {
    await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
  }
};

// Export the Vercel handler
export default async function handler(req, res) {
  await connectToDB();
  return createServerlessHandler(app)(req, res);
}