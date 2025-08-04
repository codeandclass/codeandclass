import React, { useState, useEffect } from 'react';

const PartnerNGO = () => {
    const [ngos, setNgos] = useState([]); // Initially empty, will populate from backend
    const [selectedNgo, setSelectedNgo] = useState(null);

    // Fetch NGO data from the backend
    useEffect(() => {
        const fetchNgos = async () => {
            try {
                const response = await fetch('https://codeandclass.onrender.com/api/ngos/ngos/');
                const data = await response.json();
                setNgos(data);
            } catch (error) {
                console.error("There was an error fetching the NGO data:", error);
            }
        };

        fetchNgos();
    }, []); // Empty dependency array = run once on mount

    const handleCardClick = (ngo) => {
        setSelectedNgo(ngo);
    };

    return (
        <div className="bg-black md:top-0 text-white min-h-screen flex flex-col justify-center items-center py-4 px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-center text-cyan-400 mb-12">
                Partner NGOs
            </h1>

            {selectedNgo ? (
                <div className="bg-gray-800 text-cyan-400 w-full mx-4 md:mx-14 max-w-3xl p-6 rounded-lg text-center">
                    <h2 className="text-3xl font-semibold mb-4">{selectedNgo.name}</h2>
                    <img
                        src={selectedNgo.image}
                        alt={selectedNgo.name}
                        className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <p className="text-lg mb-4">{selectedNgo.description}</p>
                    <button
                        onClick={() => setSelectedNgo(null)}
                        className="bg-cyan-400 text-black py-2 px-4 rounded hover:bg-cyan-500 transition duration-300"
                    >
                        Back
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-screen-xl">
                    {ngos.map((ngo) => (
                        <div
                            key={ngo.id || ngo._id} // use _id if your MongoDB returns that
                            className="bg-gray-700 text-white p-4 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                            onClick={() => handleCardClick(ngo)}
                        >
                            <img
                                src={ngo.image}
                                alt={ngo.name}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">{ngo.name}</h3>
                            <p className="text-sm text-gray-400">{ngo.shortDescription}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PartnerNGO;