import express from 'express';
import {
  createLecture,
  getLectures,
  updateLecture,
  deleteLecture,
  getClassData
} from '../controllers/lecture.controller.js';

const router = express.Router();

router.get('/class/:classId', getClassData);

router.route('/')
  .post(createLecture)
  .get(getLectures);

router.route('/:id')
  .put(updateLecture)
  .delete(deleteLecture);

export default router;