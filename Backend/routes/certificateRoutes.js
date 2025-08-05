import express from 'express';
import {
    createCertificate,
    getCertificates,
    updateCertificate,
    deleteCertificate,
    getCertificateByNumber
} from '../controllers/certificate.controller.js';
import { admin, protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/', protect, admin)
    .post(createCertificate)
    .get(getCertificates);

router.route('/:id', protect, admin)
    .put(updateCertificate)
    .delete(deleteCertificate);

router.get('/:certificate_no', getCertificateByNumber);


export default router;