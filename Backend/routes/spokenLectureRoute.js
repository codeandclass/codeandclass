import express from 'express';
import {
  createSpokenLecture,
  getSpokenLectures,
  updateSpokenLecture,
  deleteSpokenLecture,
  getSpokenLecturesByLevel
} from '../controllers/spokenLecture.controller.js';

const router = express.Router();

router.get('/class/:level', getSpokenLecturesByLevel)

router.route('/')
  .post(createSpokenLecture)
  .get(getSpokenLectures);

router.route('/:id')
  .put(updateSpokenLecture)
  .delete(deleteSpokenLecture);

export default router;