import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ title, description, link, imageUrl }) => {
  return (
    <Link to={`${link}`} className="block">
      <div className="max-w-sm w-full h-[22rem] rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-800 shadow-lg hover:shadow-cyan-600/40 border border-zinc-700 hover:border-cyan-500 transition-all transform hover:scale-[1.02] hover:-translate-y-1 duration-300 mx-auto">
        {/* Image */}
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-fill object-center rounded-t-2xl"
        />

        {/* Card Body */}
        <div className="px-6 py-4">
          <h3 className="text-2xl font-bold text-cyan-400 mb-2 line-clamp-1">{title}</h3>
          <p className="text-sm text-zinc-400 line-clamp-2">
            {description}
          </p>
        </div>

        {/* Learn More Button */}
        <div className="px-6 pb-4">
          <span className="inline-block px-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-semibold rounded-full shadow-md transition-all duration-300">
            Learn More
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;