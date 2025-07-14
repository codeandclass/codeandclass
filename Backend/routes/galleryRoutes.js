import express from 'express';
import {
    getGallery,
    createImage,
    updateImage,
    deleteImage,
} from '../controllers/gallery.controller.js';

const router = express.Router();

// /api/gallery
router.get('/', getGallery);
router.post('/', createImage);
router.put('/:id', updateImage);
router.delete('/:id', deleteImage);

export default router;
