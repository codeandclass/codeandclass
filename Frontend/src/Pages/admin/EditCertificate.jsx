import React, { useEffect, useState } from 'react';

const CertificateManager = () => {
    const [certificates, setCertificates] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [formData, setFormData] = useState({
        certificateNo: '',
        name: '',
        course: '',
        date: '',
        status: 'Verified',
    });

    useEffect(() => {
        fetchCertificates()
    }, []);

    const API_BASE = '/api/certificates'

    const fetchCertificates = async () => {
        try {
            const rawCertificate = await fetch(API_BASE)
            const certificateData = await rawCertificate.json()
            setCertificates(certificateData);
        } catch (err) {
            console.log(err)
        }
    }

    const handleEditClick = (index) => {
        setEditingIndex(index);
        setFormData(certificates[index]);
    };

    const handleDeleteClick = async (index) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this certificate?');
        if (!confirmDelete) return;

        const certToDelete = certificates[index];
        try {
            await fetch(`${API_BASE}/${certToDelete._id}`, {
                method: 'DELETE',
            });
            const updated = [...certificates];
            updated.splice(index, 1);
            setCertificates(updated);
            setEditingIndex(null);
            alert('Certificate deleted successfully!');
        } catch (err) {
            console.error('Delete failed:', err);
            alert('Failed to delete certificate.');
        }
    };

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleUpdate = async () => {
        const certToUpdate = certificates[editingIndex];

        try {
            const response = await fetch(`${API_BASE}/${certToUpdate._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to update');

            const updatedCert = await response.json();
            const updatedCertificates = [...certificates];
            updatedCertificates[editingIndex] = updatedCert;
            setCertificates(updatedCertificates);
            setEditingIndex(null);
            alert('Certificate updated successfully!');
        } catch (err) {
            console.error('Update failed:', err);
            alert('Failed to update certificate.');
        }
    };

    return (
        <div className="min-h-screen bg-black text-white px-4 md:px-10 lg:px-20 py-12 relative top-24">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-cyan-400">
                Certificate Manager
            </h1>

            {/* If editing */}
            {editingIndex !== null ? (
                <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 max-w-2xl mx-auto shadow-lg space-y-6 mb-10">
                    <h2 className="text-xl font-bold text-cyan-300">Edit Certificate</h2>

                    {['certificate_no', 'name', 'course', 'date'].map((field, idx) => (
                        <div key={idx}>
                            <label className="block text-sm font-semibold text-cyan-400 mb-2 capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
                            <input
                                type={field === 'date' ? 'date' : 'text'}
                                value={formData[field]}
                                onChange={(e) => handleChange(field, e.target.value)}
                                className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white outline-none focus:border-cyan-500"
                            />
                        </div>
                    ))}

                    <div>
                        <label className="block text-sm font-semibold text-cyan-400 mb-2">Status</label>
                        <select
                            value={formData.status}
                            onChange={(e) => handleChange('status', e.target.value)}
                            className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white outline-none focus:border-cyan-500"
                        >
                            <option value="Verified">Verified</option>
                            <option value="Pending">Pending</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                    </div>

                    <div className="flex justify-center gap-4 pt-4">
                        <button
                            onClick={handleUpdate}
                            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold px-8 py-2 rounded-md"
                        >
                            Update
                        </button>
                        <button
                            onClick={() => setEditingIndex(null)}
                            className="bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-2 rounded-md"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            ) : null}

            {/* Certificate List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificates.map((cert, index) => (
                    <div
                        key={index}
                        className="bg-zinc-900 p-4 rounded-xl border border-zinc-700 shadow space-y-3"
                    >
                        <h3 className="text-lg font-bold text-cyan-300">{cert.name}</h3>
                        <p className="text-zinc-400 text-sm"><strong>Certificate No:</strong> {cert?.certificate_no}</p>
                        <p className="text-zinc-300"><strong>Course:</strong> {cert?.course}</p>
                        <p className="text-zinc-300"><strong>Date:</strong> {cert?.date}</p>
                        <p className="text-zinc-300">
                            <strong>Status:</strong>{' '}
                            <span
                                className={`px-2 py-1 rounded-md text-sm font-semibold ${cert.status === 'Verified'
                                    ? 'text-green-400'
                                    : cert.status === 'Pending'
                                        ? 'text-yellow-400'
                                        : 'text-red-400'
                                    }`}
                            >
                                {cert.status}
                            </span>
                        </p>
                        <div className="flex justify-between pt-2">
                            <button
                                onClick={() => handleEditClick(index)}
                                className="bg-cyan-500 hover:bg-cyan-400 text-black px-4 py-1 rounded-md font-semibold"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDeleteClick(index)}
                                className="bg-red-600 hover:bg-red-500 text-white px-4 py-1 rounded-md font-semibold"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CertificateManager;