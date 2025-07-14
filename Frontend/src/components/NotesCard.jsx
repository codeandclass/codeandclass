import React from 'react';
import { FaDownload } from 'react-icons/fa';

const NotesCard = ({ image, title, driveLink }) => {
    return (
        <div className="bg-zinc-900 rounded-xl border border-zinc-700 overflow-hidden shadow-lg transition-transform hover:scale-105 w-full max-w-sm mx-auto">
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-fill border-b border-zinc-700"
            />

            <div className="p-4 flex flex-col items-center justify-between gap-4">
                <h3 className="text-lg font-bold text-cyan-400 text-center">{title}</h3>

                <a
                    href={driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-2 rounded-md flex items-center gap-2 transition"
                    download
                >
                    <FaDownload />
                    Download
                </a>
            </div>
        </div>
    );
};

export default NotesCard;
