import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  driveLink: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});

const Note = mongoose.model('Note', noteSchema);

export default Note;