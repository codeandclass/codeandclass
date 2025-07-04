import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaClock, FaTag, FaPercent, FaMoneyBill, FaBriefcase, FaBook } from 'react-icons/fa';

const CourseDetailed = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState([]);
  const [error, setError] = useState('');

  const API_BASE = '/api/courses'

  const fetchCourse = async () => {
    try {

      const rawCourse = await fetch(`${API_BASE}/${courseId}`)
      const courseData = await rawCourse.json()
      setCourse(courseData)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchCourse()
  }, []);

  const rawPrice = Number(course?.price?.replace(/[^\d.]/g, ''));
  const rawDiscount = Number(course?.discount?.replace(/[^\d.]/g, ''));
  const actualAmount = Math.round(rawPrice + (rawPrice * rawDiscount / 100));

  if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;
  if (!course) return <div className="text-center text-white mt-10">Loading...</div>;

  return (
    <div className="bg-black text-white min-h-screen px-4 md:px-10 lg:px-20 py-10 relative top-24">
      {/* Course Banner */}
      <div className="w-full rounded-2xl overflow-hidden shadow-2xl mb-10 hover:scale-[1.01] transition-transform">
        <img
          src={course?.thumbnail}
          alt={`${course?.title} Banner`}
          className="w-full h-48 md:h-64 object-fill object-center"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text mb-6 text-center">
        {course?.title}
      </h1>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-700 shadow-md flex items-center space-x-3">
          <FaClock className="text-cyan-400 text-xl" />
          <span className="text-zinc-300 text-sm">Duration: {course?.duration}</span>
        </div>
        <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-700 shadow-md flex items-center space-x-3">
          <FaTag className="text-cyan-400 text-xl" />
          <span className="text-zinc-300 text-sm">Price: &#8377;{actualAmount}/-</span>
        </div>
        <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-700 shadow-md flex items-center space-x-3">
          <FaPercent className="text-cyan-400 text-xl" />
          <span className="text-zinc-300 text-sm">Discount: {course?.discount}%</span>
        </div>
        <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-700 shadow-md flex items-center space-x-3">
          <FaMoneyBill className="text-cyan-400 text-xl" />
          <span className="text-zinc-300 text-sm">
            Discounted Amount: <span className="text-green-400 font-semibold"> &#8377;{course?.price}/-</span>
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 shadow-md mb-10">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
          <FaBook className="text-cyan-400" /> Course Description
        </h2>
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed text-justify">{course?.description}</p>
      </div>

      {/* Job Opportunities */}
      <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 shadow-md">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
          <FaBriefcase className="text-cyan-400" /> Job Opportunities
        </h2>
        <ul className="list-disc list-inside text-zinc-300 space-y-2 text-sm md:text-base animate-fade-in">
          {course?.jobs?.map((job, idx) => (
            <li key={idx} className="hover:text-cyan-300 transition">{job}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetailed;