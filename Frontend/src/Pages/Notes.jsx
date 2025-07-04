import React, { useEffect, useState } from 'react';
import NotesCard from '../components/NotesCard';

const Notes = () => {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetchNotes()
    }, [])

    const fetchNotes = async () => {
        try {
            const rawNotes = await fetch('http://localhost:8000/api/notes')
            const notesData = await rawNotes.json()
            setNotes(notesData)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="bg-black min-h-screen py-12 px-4 md:px-10 lg:px-20 relative top-24">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 mb-10">
                Notes Library
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {notes.map((note, index) => (
                    <NotesCard
                        key={index}
                        image={note?.image}
                        title={note?.title}
                        driveLink={note?.driveLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default Notes;
