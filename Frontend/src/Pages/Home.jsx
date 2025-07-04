import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaChalkboardTeacher, FaGraduationCap } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="relative top-24 min-h-screen bg-black text-white px-4 md:px-10 lg:px-20 py-20 flex flex-col justify-center">
      {/* Hero Section */}
      <section className="text-center space-y-6 mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
          Welcome to <span className="text-white">Code & Class</span>
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base">
          Master full stack development, ADCA, Advanced Accounting, Spoken English, and much more — all in one place.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Link to="/courses" className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-2 rounded-md shadow-md transition">
            Explore Courses
          </Link>
          <Link to="/certificate-verification" className="border border-cyan-500 hover:bg-cyan-500 hover:text-black text-cyan-400 px-6 py-2 rounded-md transition">
            Verify Certificate
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <Link to={'/courses'}>
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 shadow-md hover:border-cyan-500 transition">
            <FaCode className="text-3xl text-cyan-400 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-cyan-300">Learn to Code</h3>
            <p className="text-zinc-400 text-sm mt-2">
              Build your fundamentals with hands-on projects in React, Node.js, MongoDB, and more.
            </p>
          </div>
        </Link>
        <Link to={'/about'}>
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 shadow-md hover:border-cyan-500 transition">
            <FaChalkboardTeacher className="text-3xl text-cyan-400 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-cyan-300">Expert Instructors</h3>
            <p className="text-zinc-400 text-sm mt-2">
              Learn from industry professionals with real-world experience and practical guidance.
            </p>
          </div>
        </Link>
        <Link to={'/contact'}>
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 shadow-md hover:border-cyan-500 transition">
            <FaGraduationCap className="text-3xl text-cyan-400 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-cyan-300">Get Certified</h3>
            <p className="text-zinc-400 text-sm mt-2">
              Complete courses, earn certificates, and showcase your skills to potential employers.
            </p>
          </div>
        </Link>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to kickstart your tech career?
        </h2>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold px-8 py-3 rounded-md transition-all shadow-lg"
        >
          Get Started Now
        </Link>
      </section>
    </div>
  );
};

export default Home;