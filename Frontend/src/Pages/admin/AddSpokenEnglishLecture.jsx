import React, { useState } from 'react';

const AddSpokenEnglishLecture = () => {
  const [selectedLevel, setSelectedLevel] = useState('Beginner');
  const [unitTitle, setUnitTitle] = useState('');
  const [showChapterInput, setShowChapterInput] = useState(false);
  const [chapters, setChapters] = useState([]);
  const [chapterTitle, setChapterTitle] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  const handleAddChapter = () => {
    if (!chapterTitle || !videoUrl) return;
    setChapters([...chapters, { title: chapterTitle, videoUrl }]);
    setChapterTitle('');
    setVideoUrl('');
  };

  const handleSubmitUnit = async () => {
    const unitData = {
      level: selectedLevel,
      unitTitle,
      chapters,
    };
  
    try {
      const token = localStorage.getItem('token'); // If protected route
      const response = await fetch('/api/spoken-lectures', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token && { Authorization: `Bearer ${token}` })
        },
        body: JSON.stringify(unitData),
      });
  
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to add spoken lecture unit');
      }
  
      const data = await response.json();
      alert('Spoken English Unit successfully saved!');
  
      // Reset form
      setSelectedLevel('Beginner');
      setUnitTitle('');
      setChapters([]);
      setShowChapterInput(false);
  
    } catch (err) {
      console.error('Error saving spoken lecture:', err);
      alert(`Error: ${err.message}`);
    }
  };  

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-10 lg:px-20 py-12 relative top-24">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-cyan-400">
        Add Spoken English Lectures
      </h1>

      <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 max-w-3xl mx-auto shadow-lg space-y-6">
        {/* Level Selector */}
        <div>
          <label className="block text-sm font-semibold text-cyan-400 mb-2">Select Level</label>
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="w-full bg-black border border-zinc-600 text-white rounded-md p-2 focus:border-cyan-500 outline-none"
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        {/* Unit Title */}
        <div>
          <label className="block text-sm font-semibold text-cyan-400 mb-2">Unit Title</label>
          <input
            type="text"
            value={unitTitle}
            onChange={(e) => setUnitTitle(e.target.value)}
            placeholder="e.g., Unit 1: Daily Conversations"
            className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white focus:border-cyan-500 outline-none"
          />
        </div>

        {/* Add Chapters Button */}
        <div className="text-center">
          <button
            onClick={() => setShowChapterInput(true)}
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-2 rounded-md transition-all"
          >
            Add Chapters
          </button>
        </div>

        {/* Chapter Input Section */}
        {showChapterInput && (
          <div className="bg-zinc-800 p-4 mt-6 rounded-lg border border-zinc-700 space-y-4">
            <h2 className="text-lg font-bold text-cyan-400">Add Chapter</h2>
            <div>
              <label className="block text-sm text-cyan-300 mb-1">Chapter Title</label>
              <input
                type="text"
                value={chapterTitle}
                onChange={(e) => setChapterTitle(e.target.value)}
                placeholder="e.g., Basic Greetings"
                className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white focus:border-cyan-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-cyan-300 mb-1">YouTube Video URL</label>
              <input
                type="text"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="https://www.youtube.com/embed/xyz"
                className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white focus:border-cyan-500 outline-none"
              />
            </div>
            <button
              onClick={handleAddChapter}
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-4 py-2 rounded-md"
            >
              Add Chapter
            </button>

            {/* Display Added Chapters */}
            {chapters.length > 0 && (
              <div className="mt-4">
                <h3 className="text-cyan-400 font-semibold mb-2">Chapters:</h3>
                <ul className="list-disc list-inside text-zinc-300 space-y-1">
                  {chapters.map((chap, idx) => (
                    <li key={idx}>{chap.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Submit Button */}
        {chapters.length > 0 && unitTitle && (
          <div className="text-center pt-6">
            <button
              onClick={handleSubmitUnit}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold px-8 py-2 rounded-md transition-all"
            >
              Submit Unit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddSpokenEnglishLecture;