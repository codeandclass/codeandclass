import React, { useState, useEffect } from 'react';

const EditLecture = () => {
  const [units, setUnits] = useState([]);
  const [selectedUnit, setSelectedUnit] = useState(null);

  const API_BASE = 'http://localhost:8000/api/lectures';

  useEffect(() => {
    fetchLectures();
  }, []);

  const fetchLectures = async () => {
    try {
      const res = await fetch(API_BASE);
      const data = await res.json();
      setUnits(data);
    } catch (err) {
      console.error('Failed to fetch lectures', err);
    }
  };

  const handleEdit = (unit) => {
    setSelectedUnit(unit);
  };

  const handleDeleteUnit = async (id) => {
    const confirmDelete = window.confirm('Delete this unit?');
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${API_BASE}/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete');
      alert('Unit deleted successfully!');
      fetchLectures();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleChapterChange = (index, field, value) => {
    const updated = [...selectedUnit.chapters];
    updated[index][field] = value;
    setSelectedUnit({ ...selectedUnit, chapters: updated });
  };

  const handleAddChapter = () => {
    setSelectedUnit({
      ...selectedUnit,
      chapters: [...selectedUnit.chapters, { title: '', videoUrl: '' }]
    });
  };

  const handleDeleteChapter = (index) => {
    const confirmDelete = window.confirm('Delete this chapter?');
    if (!confirmDelete) return;
    const updated = selectedUnit.chapters.filter((_, i) => i !== index);
    setSelectedUnit({ ...selectedUnit, chapters: updated });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch(`${API_BASE}/${selectedUnit._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedUnit),
      });

      if (!res.ok) throw new Error('Update failed');
      alert('Lecture updated successfully!');
      setSelectedUnit(null);
      fetchLectures();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-10 lg:px-20 py-12 relative top-24">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-cyan-400">
        Edit Lecture Units
      </h1>

      {!selectedUnit && (
        <div className="space-y-6">
          {units.map((unit) => (
            <div
              key={unit._id}
              className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 shadow-md flex flex-col md:flex-row justify-between items-center gap-4"
            >
              <div>
                <h2 className="text-xl font-bold text-cyan-300">{unit.unitTitle}</h2>
                <p className="text-sm text-zinc-400">Class: {unit.classLevel}</p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => handleEdit(unit)}
                  className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-2 rounded-md"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteUnit(unit._id)}
                  className="bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-2 rounded-md"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedUnit && (
        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 max-w-4xl mx-auto shadow-lg space-y-6">
          <select
            value={selectedUnit.classLevel}
            onChange={(e) => setSelectedUnit({ ...selectedUnit, classLevel: e.target.value })}
            className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white focus:border-cyan-500 outline-none"
          >
            <option>Class 10</option>
            <option>Intermediate</option>
          </select>

          <input
            type="text"
            value={selectedUnit.unitTitle}
            onChange={(e) => setSelectedUnit({ ...selectedUnit, unitTitle: e.target.value })}
            placeholder="Unit Title"
            className="w-full px-4 py-2 bg-black border border-zinc-600 text-white rounded-md outline-none focus:border-cyan-500"
          />

          {selectedUnit.chapters.map((chapter, index) => (
            <div key={index} className="bg-zinc-800 p-4 rounded-md space-y-2">
              <input
                type="text"
                value={chapter.title}
                onChange={(e) => handleChapterChange(index, 'title', e.target.value)}
                placeholder="Chapter Title"
                className="w-full px-3 py-2 bg-black border border-zinc-600 text-white rounded-md"
              />
              <input
                type="text"
                value={chapter.videoUrl}
                onChange={(e) => handleChapterChange(index, 'videoUrl', e.target.value)}
                placeholder="YouTube Video URL"
                className="w-full px-3 py-2 bg-black border border-zinc-600 text-white rounded-md"
              />
              <button
                onClick={() => handleDeleteChapter(index)}
                className="bg-red-600 hover:bg-red-500 text-white px-4 py-1 rounded-md text-sm"
              >
                Delete Chapter
              </button>
            </div>
          ))}

          <button
            onClick={handleAddChapter}
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-4 py-2 rounded-md"
          >
            + Add Chapter
          </button>

          <div className="flex flex-col md:flex-row justify-center gap-4 pt-4">
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold px-8 py-2 rounded-md"
            >
              Save Changes
            </button>
            <button
              onClick={() => setSelectedUnit(null)}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold px-8 py-2 rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditLecture;