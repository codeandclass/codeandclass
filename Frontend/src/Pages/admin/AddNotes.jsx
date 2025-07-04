import React, { useState } from 'react';

const AddNotes = () => {
    const [formData, setFormData] = useState({
        image: '',
        title: '',
        driveLink: ''
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const API_BASE = 'https://codeandclass.onrender.com/api/notes';

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const response = await fetch(API_BASE, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to add notes');

            const data = await response.json();
            setMessage('✅ Notes added successfully!');
            alert('Notes added successfully!')
            setFormData({ image: '', title: '', driveLink: '' });
        } catch (err) {
            setMessage('❌ Error adding notes. Try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white px-4 md:px-10 lg:px-20 py-20 relative top-24">
            <h1 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-10 text-center">
                Upload Study Notes
            </h1>

            <form onSubmit={handleSubmit} className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 shadow-lg max-w-2xl mx-auto space-y-6">
                <div>
                    <label className="block text-sm font-semibold text-cyan-400 mb-2">Image URL</label>
                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white outline-none focus:border-cyan-500"
                        placeholder="https://example.com/image.jpg"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-cyan-400 mb-2">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white outline-none focus:border-cyan-500"
                        placeholder="Enter note title"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-cyan-400 mb-2">Drive PDF Link</label>
                    <input
                        type="url"
                        name="driveLink"
                        value={formData.driveLink}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white outline-none focus:border-cyan-500"
                        placeholder="https://drive.google.com/..."
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2 rounded-md transition"
                >
                    {loading ? 'Adding...' : 'Add Note'}
                </button>

                {message && <p className="text-center mt-4 text-sm text-cyan-400">{message}</p>}
            </form>
        </div>
    );
};

export default AddNotes;