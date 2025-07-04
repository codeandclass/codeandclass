import React, { useState, useEffect } from 'react';

const EditSpokenEnglish = () => {
  const [units, setUnits] = useState([]);
  const [selectedUnit, setSelectedUnit] = useState(null);

  const API_BASE = 'http://localhost:8000/api/spoken-lectures';

  useEffect(() => {
    const fetchUnits = async () => {
      try {
        const res = await fetch(API_BASE);
        const data = await res.json();
        setUnits(data);
      } catch (err) {
        console.error('Error fetching units:', err);
      }
    };
    fetchUnits();
  }, []);

  const handleEditClick = (unit) => {
    setSelectedUnit(unit);
  };

  const handleDeleteUnit = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this unit?');
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${API_BASE}/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Delete failed');
      setUnits(units.filter((unit) => unit._id !== id));
      setSelectedUnit(null);
      alert('Unit deleted');
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
      chapters: [...selectedUnit.chapters, { title: '', videoUrl: '' }],
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(selectedUnit),
      });

      if (!res.ok) throw new Error('Update failed');

      const updatedUnit = await res.json();
      setUnits(units.map((u) => (u._id === updatedUnit._id ? updatedUnit : u)));
      setSelectedUnit(null);
      alert('Unit updated successfully!');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-10 lg:px-20 py-12 relative top-24">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-cyan-400">
        Manage Spoken English Units
      </h1>

      {!selectedUnit ? (
        <div className="space-y-4 max-w-4xl mx-auto">
          {units.map((unit) => (
            <div key={unit._id} className="bg-zinc-900 p-4 rounded-lg border border-zinc-700 flex flex-col md:flex-row items-center justify-between">
              <h2 className="text-xl font-semibold text-cyan-300">{unit.unitTitle} ({unit.level})</h2>
              <div className="mt-2 flex gap-4">
                <button
                  onClick={() => handleEditClick(unit)}
                  className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-4 py-2 rounded-md"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteUnit(unit._id)}
                  className="bg-red-600 hover:bg-red-500 text-white font-semibold px-4 py-2 rounded-md"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 max-w-4xl mx-auto shadow-lg space-y-6">
          <div>
            <label className="block text-sm font-semibold text-cyan-400 mb-2">Select Level</label>
            <select
              value={selectedUnit.level}
              onChange={(e) => setSelectedUnit({ ...selectedUnit, level: e.target.value })}
              className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white outline-none focus:border-cyan-500"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-cyan-400 mb-2">Unit Title</label>
            <input
              type="text"
              value={selectedUnit.unitTitle}
              onChange={(e) => setSelectedUnit({ ...selectedUnit, unitTitle: e.target.value })}
              placeholder="Unit Title"
              className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-cyan-400 mb-4">Chapters</label>
            {selectedUnit.chapters.map((chapter, index) => (
              <div
                key={index}
                className="mb-4 p-4 border border-zinc-700 rounded-lg bg-zinc-800 space-y-2"
              >
                <input
                  type="text"
                  value={chapter.title}
                  onChange={(e) => handleChapterChange(index, 'title', e.target.value)}
                  placeholder="Chapter Title"
                  className="w-full px-3 py-2 bg-black border border-zinc-600 text-white rounded-md outline-none focus:border-cyan-500"
                />
                <input
                  type="text"
                  value={chapter.videoUrl}
                  onChange={(e) => handleChapterChange(index, 'videoUrl', e.target.value)}
                  placeholder="YouTube Video URL"
                  className="w-full px-3 py-2 bg-black border border-zinc-600 text-white rounded-md outline-none focus:border-cyan-500"
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
              className="mt-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-4 py-2 rounded-md"
            >
              + Add Chapter
            </button>
          </div>

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

export default EditSpokenEnglish;