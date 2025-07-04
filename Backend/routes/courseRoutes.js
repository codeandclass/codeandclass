import express from 'express';
import {
    createCourse,
    getCourses,
    updateCourse,
    deleteCourse,
    getCourseById
} from '../controllers/course.controller.js';

const router = express.Router();

router.route('/')
    .post(createCourse)
    .get(getCourses);

router.route('/:id')
    .get(getCourseById)
    .put(updateCourse)
    .delete(deleteCourse);

export default router;