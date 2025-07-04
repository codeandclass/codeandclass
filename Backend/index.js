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
import path from 'path'

const app = express();
const DIRNAME = path.resolve()


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

// Error Handling
app.use(errorHandler);

const port = process.env.PORT || 8000

app.use(express.static(path.join(DIRNAME, '/Frontend/dist')))
app.use('*', (_, res) => {
    res.sendFile(path.resolve(DIRNAME, 'Frontend', 'dist', 'index.html'))
})


// Connect DB and Start server
mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
}).catch((err) => {
    console.error(err);
});