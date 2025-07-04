import React, { useState } from 'react';

const AddCourse = () => {
    const [course, setCourse] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [jobs, setJobs] = useState([]);
    const [jobInput, setJobInput] = useState('');

    const handleAddJob = () => {
        if (jobInput.trim()) {
            setJobs([...jobs, jobInput]);
            setJobInput('');
        }
    };

    const handleSubmit = async () => {
        if (
            !course.trim() ||
            !thumbnail.trim() ||
            !title.trim() ||
            !description.trim() ||
            !duration.trim() ||
            !price.trim() ||
            !discount.trim() ||
            jobs.length === 0
        ) {
            alert('Please fill out all fields and add at least one job role.');
            return;
        }

        const courseData = {
            course,
            thumbnail,
            title,
            description,
            duration,
            price,
            discount,
            jobs,
        };

        try {
            const token = localStorage.getItem('token'); // optional if protected route
            const res = await fetch('https://codeandclass.onrender.com/api/courses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...(token && { Authorization: `Bearer ${token}` }),
                },
                body: JSON.stringify(courseData),
            });

            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.message || 'Failed to add course');
            }

            const result = await res.json();
            alert('Course successfully saved!');

            // Reset form
            setCourse('');
            setThumbnail('');
            setTitle('');
            setDescription('');
            setDuration('');
            setPrice('');
            setDiscount('');
            setJobs([]);
            setJobInput('');
        } catch (err) {
            console.error('Error:', err);
            alert(`Error: ${err.message}`);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white px-4 md:px-10 lg:px-20 py-12 relative top-24">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-cyan-400">
                Add New Course
            </h1>

            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 max-w-3xl mx-auto shadow-lg space-y-6">
                {/* Course Slug */}
                <div>
                    <label className="block text-sm font-semibold text-cyan-400 mb-2">Course Slug (URL)</label>
                    <input
                        required
                        type="text"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        placeholder="e.g., react-for-beginners"
                        className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white outline-none focus:border-cyan-500"
                    />
                </div>

                {/* Thumbnail */}
                <div>
                    <label className="block text-sm font-semibold text-cyan-400 mb-2">Thumbnail URL</label>
                    <input
                        required
                        type="text"
                        value={thumbnail}
                        onChange={(e) => setThumbnail(e.target.value)}
                        placeholder="Paste image URL here"
                        className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white outline-none focus:border-cyan-500"
                    />
                </div>

                {/* Title */}
                <div>
                    <label className="block text-sm font-semibold text-cyan-400 mb-2">Course Title</label>
                    <input
                        required
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g., React for Beginners"
                        className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white outline-none focus:border-cyan-500"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-semibold text-cyan-400 mb-2">Course Description</label>
                    <textarea
                        required
                        rows="4"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Write the course details here..."
                        className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white outline-none focus:border-cyan-500 resize-none"
                    />
                </div>

                {/* Duration */}
                <div>
                    <label className="block text-sm font-semibold text-cyan-400 mb-2">Duration</label>
                    <input
                        required
                        type="text"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        placeholder="e.g., 6 weeks"
                        className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white outline-none focus:border-cyan-500"
                    />
                </div>

                {/* Price and Discount */}
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                        <label className="block text-sm font-semibold text-cyan-400 mb-2">Price</label>
                        <input
                            required
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="e.g., ₹4999"
                            className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white outline-none focus:border-cyan-500"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-semibold text-cyan-400 mb-2">Discount</label>
                        <input
                            required
                            type="text"
                            value={discount}
                            onChange={(e) => setDiscount(e.target.value)}
                            placeholder="e.g., 50%"
                            className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white outline-none focus:border-cyan-500"
                        />
                    </div>
                </div>

                {/* Job Roles */}
                <div>
                    <label className="block text-sm font-semibold text-cyan-400 mb-2">Job Roles</label>
                    <div className="flex gap-2 mb-3">
                        <input
                            required
                            type="text"
                            value={jobInput}
                            onChange={(e) => setJobInput(e.target.value)}
                            placeholder="e.g., Frontend Developer - Fresher"
                            className="flex-1 px-4 py-2 rounded-md bg-black border border-zinc-600 text-white outline-none focus:border-cyan-500"
                        />
                        <button
                            onClick={handleAddJob}
                            className="bg-cyan-500 hover:bg-cyan-400 text-black px-4 py-2 rounded-md font-semibold"
                        >
                            Add
                        </button>
                    </div>
                    <ul className="list-disc list-inside text-zinc-300 space-y-1">
                        {jobs.map((job, idx) => (
                            <li key={idx}>{job}</li>
                        ))}
                    </ul>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                    <button
                        onClick={handleSubmit}
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold px-8 py-2 rounded-md transition-all"
                    >
                        Submit Course
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddCourse;