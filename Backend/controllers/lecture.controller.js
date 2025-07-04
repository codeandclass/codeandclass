import Lecture from '../models/lectures.model.js';
import asyncHandler from 'express-async-handler';

export const createLecture = asyncHandler(async (req, res) => {
    const newLecture = await Lecture.create(req.body);
    res.status(201).json(newLecture);
});

export const getLectures = asyncHandler(async (req, res) => {
    const lectures = await Lecture.find();
    res.json(lectures);
});

export const getClassData = asyncHandler(async (req, res) => {
    const lectures = await Lecture.find({ classLevel: req.params.classId })
    res.json(lectures)
})

export const updateLecture = asyncHandler(async (req, res) => {
    const lecture = await Lecture.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(lecture);
});

export const deleteLecture = asyncHandler(async (req, res) => {
    await Lecture.findByIdAndDelete(req.params.id);
    res.json({ message: 'Lecture deleted' });
});