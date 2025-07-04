import asyncHandler from 'express-async-handler';
import Note from '../models/note.model.js';

// @desc    Get all notes
// @route   GET /api/notes
export const getNotes = asyncHandler(async (req, res) => {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.json(notes);
});

// @desc    Create a note
// @route   POST /api/notes
export const createNote = asyncHandler(async (req, res) => {
    const { image, title, driveLink } = req.body;

    if (!image || !title || !driveLink) {
        res.status(400);
        throw new Error('Please provide all required fields');
    }

    const note = await Note.create({ image, title, driveLink });
    res.status(201).json(note);
});

// @desc    Update a note
// @route   PUT /api/notes/:id
export const updateNote = asyncHandler(async (req, res) => {
    const note = await Note.findById(req.params.id);

    if (!note) {
        res.status(404);
        throw new Error('Note not found');
    }

    const updated = await Note.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.json(updated);
});

// @desc    Delete a note
// @route   DELETE /api/notes/:id
// controllers/notesController.js
export const deleteNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.status(200).json({ message: 'Note deleted successfully' });
  } catch (err) {
    console.error('Delete Error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
