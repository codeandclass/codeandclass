import React from 'react';
import Img from '../assets/asifpic.jpeg'

const AboutInstructor = () => {
    return (
        <div className="bg-black text-white py-16 px-4 md:px-10 lg:px-20 relative top-24">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
                {/* Instructor Image */}
                <div className="w-full lg:w-1/3">
                    <img
                        src={Img} // Replace with your instructor image URL
                        alt="Instructor"
                        className="w-full h-auto rounded-xl border-4 border-cyan-500 shadow-lg object-cover"
                    />
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-2/3 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
                        Meet Your Instructor
                    </h2>
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                        Hello! I'm <span className="text-white font-semibold">Mohammed Asif Khan</span>, a dedicated Spoken English trainer and an exceptional educator for Class 10 and Intermediate students. I specialize in helping learners build confidence in communication and excel in academics.
                    </p>
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                        With years of experience in teaching and mentoring, I’ve guided countless students toward academic success and personal growth. My classes are engaging, practical, and results-driven.
                    </p>
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                        I am also the proud Director of <span className="text-white font-semibold">Code & Class Institute</span>, where we combine academic excellence with technical skills to prepare students for a brighter future.
                    </p>
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                        Let’s learn, speak, and succeed together. 🎓📘✨
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutInstructor;
