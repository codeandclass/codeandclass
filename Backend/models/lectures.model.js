import mongoose from 'mongoose';

const chapterSchema = new mongoose.Schema({
  title: { type: String, required: true },
  videoUrl: { type: String, required: true },
});

const lectureSchema = new mongoose.Schema({
  classLevel: {
    type: String,
    enum: ['Class-10', 'Intermediate'],
    required: true,
  },
  unitTitle: { type: String, required: true },
  chapters: [chapterSchema],
});

export default mongoose.model('Lecture', lectureSchema);