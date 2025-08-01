import express from 'express'
import { getAllNgos, addNgo, updateNgo, deleteNgo } from '../controllers/ngo.controller.js';

const router = express.Router();

// Route to get all NGOs
router.get('/ngos', getAllNgos);

// Route to add a new NGO (optional)
router.post('/ngos', addNgo);

// Route to update an NGO by ID
router.put('/ngos/:id', updateNgo);

// Route to delete an NGO by ID
router.delete('/ngos/:id', deleteNgo);

export default router
