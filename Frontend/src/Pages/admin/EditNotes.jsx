import React, { useEffect, useState } from 'react';

const API_BASE = '/api/notes'; // Update if needed

const EditNotes = () => {
  const [notes, setNotes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({ image: '', title: '', driveLink: '' });

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const res = await fetch(API_BASE);
      const data = await res.json();
      setNotes(data);
    } catch (err) {
      console.error('Failed to fetch notes:', err);
    }
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditData({ ...notes[index] });
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm('Are you sure you want to delete this note?');
    if (!confirm) return;

    try {
      const res = await fetch(`${API_BASE}/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Delete failed');

      setNotes(notes.filter((note) => note._id !== id));
      alert('Note deleted successfully!');
    } catch (err) {
      console.error('Error deleting note:', err);
      alert('Something went wrong.');
    }
  };

  const handleSave = async () => {
    try {
      const res = await fetch(`${API_BASE}/${editData._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editData),
      });

      if (!res.ok) throw new Error('Update failed');

      const updatedNote = await res.json();
      const updatedNotes = [...notes];
      updatedNotes[editIndex] = updatedNote;
      setNotes(updatedNotes);
      setEditIndex(null);
      alert('Note updated successfully!');
    } catch (err) {
      console.error('Error updating note:', err);
      alert('Something went wrong.');
    }
  };

  const handleChange = (field, value) => {
    setEditData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-10 lg:px-20 py-20 relative top-24">
      <h1 className="text-3xl md:text-4xl font-bold text-cyan-400 text-center mb-10">Edit & Manage Notes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {notes.map((note, index) => (
          <div
            key={note._id}
            className="bg-zinc-900 p-4 rounded-xl border border-zinc-700 shadow space-y-4"
          >
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editData.image}
                  onChange={(e) => handleChange('image', e.target.value)}
                  placeholder="Image URL"
                  className="w-full px-3 py-2 rounded-md bg-black border border-zinc-600 text-white outline-none focus:border-cyan-500"
                />
                <input
                  type="text"
                  value={editData.title}
                  onChange={(e) => handleChange('title', e.target.value)}
                  placeholder="Title"
                  className="w-full px-3 py-2 rounded-md bg-black border border-zinc-600 text-white outline-none focus:border-cyan-500"
                />
                <input
                  type="text"
                  value={editData.driveLink}
                  onChange={(e) => handleChange('driveLink', e.target.value)}
                  placeholder="Drive PDF Link"
                  className="w-full px-3 py-2 rounded-md bg-black border border-zinc-600 text-white outline-none focus:border-cyan-500"
                />
                <div className="flex gap-4">
                  <button
                    onClick={handleSave}
                    className="bg-cyan-500 hover:bg-cyan-400 text-black px-4 py-2 rounded-md font-semibold"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditIndex(null)}
                    className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <img
                  src={note.image}
                  alt={note.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h2 className="text-xl font-bold text-cyan-300">{note.title}</h2>
                <a
                  href={note.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-cyan-400 underline break-words"
                >
                  Download PDF
                </a>
                <div className="flex justify-between pt-2">
                  <button
                    onClick={() => handleEditClick(index)}
                    className="bg-cyan-500 hover:bg-cyan-400 text-black px-4 py-1 rounded-md font-semibold"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(note._id)}
                    className="bg-red-600 hover:bg-red-500 text-white px-4 py-1 rounded-md font-semibold"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditNotes;