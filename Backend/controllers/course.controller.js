import Course from '../models/course.model.js';
import asyncHandler from 'express-async-handler';

export const createCourse = asyncHandler(async (req, res) => {
  const course = await Course.create(req.body);
  res.status(201).json(course);
});

export const getCourses = asyncHandler(async (req, res) => {
  const list = await Course.find();
  res.json(list);
});


export const getCourseById = asyncHandler(async (req, res) => {
  const list = await Course.findById(req.params.id);
  res.json(list);
});

export const updateCourse = asyncHandler(async (req, res) => {
  const updated = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

export const deleteCourse = asyncHandler(async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.json({ message: 'Course deleted' });
});