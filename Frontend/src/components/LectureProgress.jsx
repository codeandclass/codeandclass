import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const LectureProgress = () => {
  const classId = useParams()

  const [units, setUnits] = useState([])

  const API_BASE = '/api/lectures'

  useEffect(() => {
    fetchUnits()
  }, [classId])

  useEffect(() => {
    if (units.length > 0 && units[0].chapters.length > 0) {
      setSelectedChapter(units[0].chapters[0]);
    }
  }, [units]);

  const fetchUnits = async () => {
    try {
      const rawUnits = await fetch(`${API_BASE}/class/${classId.classId}`)
      const unitsData = await rawUnits.json()
      setUnits(unitsData)
    } catch (error) {
      console.log(error)
    }
  }

  const [selectedChapter, setSelectedChapter] = useState(units[0]?.chapters[0]);

  return (
    <div className="bg-black text-white min-h-screen px-4 md:px-10 lg:px-20 py-10 relative top-24">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 mb-8">
        React Course - Progress Tracker
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Video Player */}
        <div className="flex-1 w-full">
          <div className="rounded-xl overflow-hidden shadow-lg aspect-video">
            <iframe
              src={selectedChapter?.videoUrl}
              title={selectedChapter?.title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Dropdown Chapter List */}
        <div className="w-full lg:w-1/3 bg-zinc-900 rounded-xl border border-zinc-700 p-6 shadow-md">
          <h2 className="text-cyan-400 text-lg font-semibold mb-4">Select Chapter</h2>
          <div className="space-y-4">
            {units.map((unit, unitIdx) => (
              <details key={unitIdx} className="group border border-zinc-700 rounded-md">
                <summary className="cursor-pointer px-4 py-2 bg-black text-cyan-300 text-sm font-medium rounded-md group-open:bg-zinc-800 transition">
                  {unit?.unitTitle}
                </summary>
                <div className="flex flex-col">
                  {unit?.chapters?.map((chapter, chapIdx) => (
                    <button
                      key={chapIdx}
                      onClick={() => setSelectedChapter(chapter)}
                      className={`text-left px-4 py-2 text-sm hover:bg-zinc-800 ${selectedChapter?.title === chapter?.title ? 'bg-cyan-600 text-black font-medium' : 'text-white'
                        }`}
                    >
                      {chapter?.title}
                    </button>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LectureProgress;