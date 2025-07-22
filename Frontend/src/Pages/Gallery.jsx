import React, { useEffect, useState } from 'react';
import { Zoom } from 'react-awesome-reveal';

const Gallery = () => {

    const [images, setImages] = useState([])

    useEffect(() => {
        fetch('https://codeandclass.onrender.com/api/gallery')
            .then(res => res.json())
            .then(data => setImages(data))
            .catch(err => console.error('Error fetching gallery:', err));
    }, []);

    return (
        <div className="min-h-screen relative bg-black text-white px-4 py-24 md:px-10 lg:px-20 top-10">
            <h1 className="text-3xl md:text-5xl font-bold text-center text-cyan-400 mb-12">
                Gallery
            </h1>
            <p className="text-zinc-400 text-center max-w-xl mx-auto mb-8 text-sm md:text-base">
                This is our gallery showcasing special moments, events, and student achievements at Code & Class.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <Zoom cascade damping={0.1} triggerOnce>
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-xl border border-zinc-700 shadow-md hover:shadow-cyan-500/20 transition-all"
                        >
                            <img
                                src={src.imageUrl}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </Zoom>
            </div>
        </div>
    );
};

export default Gallery;
