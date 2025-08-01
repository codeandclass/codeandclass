import React, { useEffect, useState } from 'react';

const AddEditGallery = () => {
    const [gallery, setGallery] = useState([]);
    const [editId, setEditId] = useState(null);
    const [editUrl, setEditUrl] = useState('');
    const [newImageUrl, setNewImageUrl] = useState('');

    // Fetch gallery on load
    useEffect(() => {
        fetch('https://codeandclass.onrender.com/api/gallery')
            .then(res => res.json())
            .then(data => setGallery(data))
            .catch(err => console.error('Error fetching gallery:', err));
    }, []);

    // Handle delete
    const handleDelete = async (id) => {
        try {
            await fetch(`https://codeandclass.onrender.com/api/gallery/${id}`, { method: 'DELETE' });
            setGallery(gallery.filter(img => img._id !== id));
        } catch (error) {
            console.error('Delete failed:', error);
        }
    };

    // Handle edit save
    const handleEditSave = async () => {
        try {
            const res = await fetch(`https://codeandclass.onrender.com/api/gallery/${editId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ imageUrl: editUrl }),
            });
            const updated = await res.json();
            setGallery(gallery.map(img => img._id === editId ? updated : img));
            setEditId(null);
            setEditUrl('');
        } catch (error) {
            console.error('Edit failed:', error);
        }
    };

    // Handle add new image
    const handleAddImage = async () => {
        if (!newImageUrl.trim()) return;
        try {
            const res = await fetch(`https://codeandclass.onrender.com/api/gallery`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ imageUrl: newImageUrl }),
            });
            const added = await res.json();
            setGallery([added, ...gallery]);
            setNewImageUrl('');
        } catch (err) {
            console.error('Error adding image:', err);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white px-4 py-24 md:px-10 lg:px-20 relative top-10">
            <h1 className="text-3xl md:text-5xl font-bold text-center text-cyan-400 mb-4">
                Manage Gallery
            </h1>
            <p className="text-zinc-400 text-center max-w-xl mx-auto mb-10 text-sm md:text-base">
                View, add, update or remove gallery images from here.
            </p>

            {/* Add new image */}
            <div className="max-w-2xl mx-auto mb-12 bg-zinc-900 border border-zinc-700 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-cyan-300 mb-4">Add New Image</h3>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <input
                        type="text"
                        placeholder="Enter image URL"
                        value={newImageUrl}
                        onChange={(e) => setNewImageUrl(e.target.value)}
                        className="w-full px-3 py-2 rounded-md text-white border border-white"
                    />
                    <button
                        onClick={handleAddImage}
                        className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-2 rounded-md transition"
                    >
                        Add Image
                    </button>
                </div>
            </div>

            {/* Image gallery grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {gallery.map((item) => (
                    <div key={item._id} className="bg-zinc-900 p-4 rounded-xl border border-zinc-700 shadow-md hover:border-cyan-500 transition space-y-4">
                        <img
                            src={item.imageUrl}
                            alt="Gallery"
                            className="w-full h-56 object-cover rounded-md"
                        />

                        {editId === item._id ? (
                            <>
                                <input
                                    value={editUrl}
                                    onChange={(e) => setEditUrl(e.target.value)}
                                    placeholder="Update Image URL"
                                    className="w-full px-3 py-2 rounded-md text-white border border-white"
                                />
                                <button
                                    onClick={handleEditSave}
                                    className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-4 py-2 rounded-md transition"
                                >
                                    Save
                                </button>
                            </>
                        ) : (
                            <div className="flex gap-4 justify-center">
                                <button
                                    onClick={() => {
                                        setEditId(item._id);
                                        setEditUrl(item.imageUrl);
                                    }}
                                    className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black px-4 py-1 rounded-md transition"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(item._id)}
                                    className="border border-red-500 text-red-400 hover:bg-red-500 hover:text-black px-4 py-1 rounded-md transition"
                                >
                                    Delete
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddEditGallery;