import React, { useState } from 'react';

const AddCertificate = () => {
    const [certificateNo, setCertificateNo] = useState('');
    const [name, setName] = useState('');
    const [fatherName, setFatherName] = useState('')
    const [dob, setDob] = useState('')
    const [course, setCourse] = useState('');
    const [duration, setDuration] = useState('')
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('Verified');

    const handleSubmit = async () => {
        if (!certificateNo || !name || !fatherName || !dob || !course || !duration || !date || !status) {
            alert('Please fill in all fields.');
            return;
        }

        const certificateData = {
            certificate_no: certificateNo.toUpperCase(),
            name: name.toUpperCase(),
            father_name: fatherName.toUpperCase(),
            course: course.toUpperCase(),
            dob,
            duration,
            date,
            status,
        };

        try {
            const res = await fetch('https://codeandclass.onrender.com/api/certificates/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(certificateData)
            });

            if (!res.ok) {
                throw new Error('Failed to add certificate');
            }

            const result = await res.json();
            alert('Certificate successfully saved!');

            // Reset fields
            setCertificateNo('');
            setName('');
            setFatherName('')
            setCourse('');
            setDob('')
            setDuration('')
            setDate('');
            setStatus('Verified');
        } catch (error) {
            console.error('Error saving certificate:', error);
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-black text-white px-4 md:px-10 lg:px-20 py-12 relative top-24">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-cyan-400">
                Add New Certificate
            </h1>

            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 max-w-3xl mx-auto shadow-lg space-y-6">
                {/* Certificate Number */}
                <div>
                    <label className="block text-sm font-semibold text-cyan-400 mb-2">Certificate No.</label>
                    <input
                        type="text"
                        value={certificateNo}
                        onChange={(e) => setCertificateNo(e.target.value)}
                        placeholder="e.g., CERT12345"
                        className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white outline-none focus:border-cyan-500"
                    />
                </div>

                {/* Name */}
                <div>
                    <label className="block text-sm font-semibold text-cyan-400 mb-2">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g., Mohammed Mansoor"
                        className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white outline-none focus:border-cyan-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-cyan-400 mb-2">Father Name</label>
                    <input
                        type="text"
                        value={fatherName}
                        onChange={(e) => setFatherName(e.target.value)}
                        placeholder="e.g., Mohammed Omer"
                        className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white outline-none focus:border-cyan-500"
                    />
                </div>

                {/* Course */}
                <div>
                    <label className="block text-sm font-semibold text-cyan-400 mb-2">Course</label>
                    <input
                        type="text"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        placeholder="e.g., Full Stack Development"
                        className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white outline-none focus:border-cyan-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-cyan-400 mb-2">Duration</label>
                    <input
                        type="text"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        placeholder="e.g., Six Months"
                        className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white outline-none focus:border-cyan-500"
                    />
                </div>

                {/* Date */}
                <div>
                    <label className="block text-sm font-semibold text-cyan-400 mb-2">Date</label>
                    <input
                        type="text"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white outline-none focus:border-cyan-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-cyan-400 mb-2">Date of Birth</label>
                    <input
                        type="text"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white outline-none focus:border-cyan-500"
                    />
                </div>

                {/* Status */}
                <div>
                    <label className="block text-sm font-semibold text-cyan-400 mb-2">Status</label>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white outline-none focus:border-cyan-500"
                    >
                        <option value="Verified">Verified</option>
                        <option value="Pending">Pending</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                    <button
                        onClick={handleSubmit}
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold px-8 py-2 rounded-md transition-all"
                    >
                        Submit Certificate
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddCertificate;