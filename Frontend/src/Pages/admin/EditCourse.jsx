import React, { useEffect, useState } from 'react';
import EditCourse from './EditCourse'; // assuming the EditCourse component you shared is in the same folder

const CourseManager = () => {
    const [courses, setCourses] = useState([]);

    const API_BASE = '/api/courses';

    useEffect(() => {
        handleFetchCourses()
    }, [])

    const handleFetchCourses = async () => {
        try {

            const fetchCourses = await fetch(API_BASE)
            const coursesData = await fetchCourses.json()
            setCourses(coursesData)
        } catch (err) {
            console.error('Failed to fetch lectures', err);
        }
    }

    const [editingCourseIndex, setEditingCourseIndex] = useState(null);

    const handleEdit = (index) => setEditingCourseIndex(index);

    const handleDelete = async (index) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this course?');
        if (!confirmDelete) return;

        const courseToDelete = courses[index];

        try {
            const response = await fetch(`${API_BASE}/${courseToDelete._id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete course');
            }

            const updatedCourses = [...courses];
            updatedCourses.splice(index, 1);
            setCourses(updatedCourses);

            alert('Course deleted successfully!');
        } catch (err) {
            console.error('Error deleting course:', err);
            alert('Something went wrong while deleting the course.');
        }
    };

    const handleSaveChanges = async (updatedData) => {
        try {
            const response = await fetch(`${API_BASE}/${updatedData._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });

            if (!response.ok) {
                throw new Error('Failed to update course');
            }

            const updatedCourse = await response.json();
            const updatedCourses = [...courses];
            updatedCourses[editingCourseIndex] = updatedCourse;
            setCourses(updatedCourses);
            setEditingCourseIndex(null);
            alert('Course updated successfully!');
        } catch (err) {
            console.error('Error updating course:', err);
            alert('Something went wrong while updating the course.');
        }
    };

    return (
        <div className="min-h-screen bg-black text-white px-4 md:px-10 lg:px-20 py-20 relative top-24">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 mb-10">Manage Courses</h1>

            {editingCourseIndex === null ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {courses.map((c, index) => (
                        <div key={index} className="bg-zinc-900 p-4 rounded-xl border border-zinc-700 shadow space-y-4">
                            <img src={c.thumbnail} alt={c.title} className="w-full h-48 object-cover rounded-md" />
                            <div>
                                <h2 className="text-xl font-bold text-cyan-300">{c?.title}</h2>
                                <p className="text-zinc-400 text-sm line-clamp-2">{c?.description}</p>
                                <p className="text-zinc-300 mt-1"><strong>Duration:</strong> {c?.duration}</p>
                                <p className="text-zinc-300 space-x-0.5"><strong>Price:</strong> &#8377;{c?.price}/-
                                    <span className="text-cyan-400 space-x-0.5">({c?.discount}% off)</span>
                                </p>
                                <ul className="list-disc list-inside text-sm text-zinc-400 mt-2">
                                    {c?.jobs?.map((job, idx) => <li key={idx}>{job}</li>)}
                                </ul>
                            </div>
                            <div className="flex justify-between pt-2">
                                <button onClick={() => handleEdit(index)} className="bg-cyan-500 hover:bg-cyan-400 text-black px-4 py-1 rounded-md font-semibold">Edit</button>
                                <button onClick={() => handleDelete(index)} className="bg-red-600 hover:bg-red-500 text-white px-4 py-1 rounded-md font-semibold">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <EditCourseForm
                    initialData={courses[editingCourseIndex]}
                    onCancel={() => setEditingCourseIndex(null)}
                    onSave={handleSaveChanges}
                />
            )}
        </div>
    );
};

const EditCourseForm = ({ initialData, onCancel, onSave }) => {
    const [formData, setFormData] = useState({ ...initialData });
    const [jobInput, setJobInput] = useState('');

    const handleChange = (field, value) => setFormData({ ...formData, [field]: value });

    const handleAddJob = () => {
        if (jobInput.trim()) {
            setFormData({ ...formData, jobs: [...formData.jobs, jobInput] });
            setJobInput('');
        }
    };

    return (
        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 max-w-3xl mx-auto shadow-lg space-y-6">
            <h2 className="text-xl font-bold text-cyan-300">Edit Course</h2>

            {['course', 'thumbnail', 'title', 'description', 'duration', 'price', 'discount'].map(field => (
                <div key={field}>
                    <label className="block text-sm font-semibold text-cyan-400 mb-2 capitalize">{field}</label>
                    <input
                        type="text"
                        value={formData[field]}
                        onChange={(e) => handleChange(field, e.target.value)}
                        className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white outline-none focus:border-cyan-500"
                    />
                </div>
            ))}

            <div>
                <label className="block text-sm font-semibold text-cyan-400 mb-2">Job Roles</label>
                <div className="flex gap-2 mb-3">
                    <input
                        type="text"
                        value={jobInput}
                        onChange={(e) => setJobInput(e.target.value)}
                        placeholder="e.g., React Developer"
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
                    {formData.jobs.map((job, idx) => (
                        <li key={idx}>{job}</li>
                    ))}
                </ul>
            </div>

            <div className="flex justify-center gap-4 pt-6">
                <button
                    onClick={() => onSave(formData)}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold px-8 py-2 rounded-md"
                >
                    Save
                </button>
                <button
                    onClick={onCancel}
                    className="bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-2 rounded-md"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default CourseManager;