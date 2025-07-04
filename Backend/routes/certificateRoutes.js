import express from 'express';
import {
    createCertificate,
    getCertificates,
    updateCertificate,
    deleteCertificate,
    getCertificateByNumber
} from '../controllers/certificate.controller.js';

const router = express.Router();

router.route('/')
    .post(createCertificate)
    .get(getCertificates);

router.route('/:id')
    .put(updateCertificate)
    .delete(deleteCertificate);

router.get('/:certificate_no', getCertificateByNumber);


export default router;