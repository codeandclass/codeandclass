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
import galleryRoutes from './routes/galleryRoutes.js';
import ngoRoutes from './routes/ngo.routes.js';

const app = express();


app.use(cors());
dotenv.config();

app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/lectures', lectureRoutes);
app.use('/api/spoken-lectures', spokenLectureRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/certificates', certificateRoutes);
app.use('/api/notes', notesRoute);
app.use('/api/gallery', galleryRoutes);
app.use('/api/ngos', ngoRoutes);

// Error Handling
app.use(errorHandler);

const port = process.env.PORT || 8000


// Connect DB and Start server
mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
}).catch((err) => {
    console.error(err);
});