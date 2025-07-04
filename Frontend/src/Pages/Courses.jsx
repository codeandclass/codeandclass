import React, { useEffect, useState } from 'react';
import CourseCard from '../components/CourseCard';

const Courses = () => {
  
  const [courses, setCourses] = useState([])

  const API_BASE = '/api/courses';

  useEffect(() => {
    handleFetchCourses()
  }, [])

  const handleFetchCourses = async () => {
    try {

      const fetchCourses = await fetch(API_BASE)
      const coursesData = await fetchCourses.json()
      setCourses(coursesData)
    } catch (err) {
      console.error('Failed to fetch lectures', err);
    }
  }

  return (
    <div className="min-h-screen overflow-y-auto bg-black text-white py-16 px-4 sm:px-6 md:px-10 lg:px-20 relative top-24">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text mb-4">
          Explore Our Courses
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto">
          Upskill yourself with industry-relevant courses designed to help you land your dream job.
        </p>
      </div>

      {/* Grid of Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            description={course.description}
            link={course._id}
            imageUrl={course.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;