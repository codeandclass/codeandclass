import express from 'express';
import {
  registerUser,
  loginUser,
  getAllUsers,
  deleteUser,
  updateUser,
} from '../controllers/user.controller.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', getAllUsers);           // GET all users
router.delete('/:id', deleteUser);      // DELETE user
router.put('/:id', updateUser);         // UPDATE user

export default router;