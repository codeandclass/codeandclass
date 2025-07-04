import Certificate from '../models/certificate.model.js';
import asyncHandler from 'express-async-handler';

export const createCertificate = asyncHandler(async (req, res) => {
    const cert = await Certificate.create(req.body);
    res.status(201).json(cert);
});

export const getCertificates = asyncHandler(async (req, res) => {
    const list = await Certificate.find();
    res.json(list);
});

export const getCertificateByNumber = asyncHandler(async (req, res) => {
    const cert = await Certificate.findOne({ certificate_no: req.params.certificate_no });
    if (!cert) {
        res.status(404);
        throw new Error('Certificate not found');
    }
    res.json(cert);
});

export const updateCertificate = asyncHandler(async (req, res) => {
    const updated = await Certificate.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});

export const deleteCertificate = asyncHandler(async (req, res) => {
    await Certificate.findByIdAndDelete(req.params.id);
    res.json({ message: 'Certificate deleted' });
});