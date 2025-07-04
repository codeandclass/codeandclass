import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  course: { type: String, required: true, unique: true }, // slug
  thumbnail: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: String, required: true },
  price: { type: String, required: true },
  discount: { type: String },
  jobs: [String],
});

export default mongoose.model('Course', courseSchema);