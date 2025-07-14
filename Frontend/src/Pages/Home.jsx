import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaCode, FaChalkboardTeacher, FaGraduationCap } from 'react-icons/fa';
import { Link as ScrollLink, Element } from 'react-scroll';
import { Fade } from 'react-awesome-reveal';

const Home = () => {
  return (
    <>
      <Element name="top" />
      <div className="relative top-24 min-h-screen bg-black text-white px-4 md:px-10 lg:px-20 py-20 flex flex-col justify-center">
        {/* Hero Section */}
        <section className="text-center space-y-6 mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
            Welcome to <span className="text-white">Code & Class</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base">
            Master full stack development, ADCA, Advanced Accounting, Spoken English, and much more — all in one place.
          </p>
          <div className="flex justify-center flex-wrap gap-4 pt-4">
            <RouterLink to="/courses" className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-2 rounded-md shadow-md transition">
              Explore Courses
            </RouterLink>
            <RouterLink to="/certificate-verification" className="border border-cyan-500 hover:bg-cyan-500 hover:text-black text-cyan-400 px-6 py-2 rounded-md transition">
              Verify Certificate
            </RouterLink>
            <ScrollLink
              to="tuitions"
              smooth={true}
              duration={600}
              offset={-60}
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-2 rounded-md shadow-md transition cursor-pointer"
            >
              View Tuitions
            </ScrollLink>
          </div>
        </section>

        {/* Features */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <RouterLink to="/courses">
            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 shadow-md hover:border-cyan-500 transition">
              <FaCode className="text-3xl text-cyan-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-cyan-300">Learn to Code</h3>
              <p className="text-zinc-400 text-sm mt-2">
                Build your fundamentals with hands-on projects in React, Node.js, MongoDB, and more.
              </p>
            </div>
          </RouterLink>
          <RouterLink to="/about">
            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 shadow-md hover:border-cyan-500 transition">
              <FaChalkboardTeacher className="text-3xl text-cyan-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-cyan-300">Expert Instructors</h3>
              <p className="text-zinc-400 text-sm mt-2">
                Learn from industry professionals with real-world experience and practical guidance.
              </p>
            </div>
          </RouterLink>
          <RouterLink to="/contact">
            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 shadow-md hover:border-cyan-500 transition">
              <FaGraduationCap className="text-3xl text-cyan-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-cyan-300">Get Certified</h3>
              <p className="text-zinc-400 text-sm mt-2">
                Complete courses, earn certificates, and showcase your skills to potential employers.
              </p>
            </div>
          </RouterLink>
        </section>

        {/* Popular Diploma Courses */}
        <Fade cascade damping={0.1}>
          <section className="mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-10">
              Popular Diploma Courses
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <RouterLink to="/courses">
                <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 shadow-md hover:border-cyan-500 transition">
                  <h3 className="text-xl font-bold text-cyan-300 mb-2">Programming</h3>
                  <p className="text-zinc-400 text-sm">C, C++, Python, Java, DSA</p>
                </div>
              </RouterLink>

              <RouterLink to="/courses">
                <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 shadow-md hover:border-cyan-500 transition">
                  <h3 className="text-xl font-bold text-cyan-300 mb-2">Graphic Designer</h3>
                  <p className="text-zinc-400 text-sm">Photoshop, Illustrator, Corel Draw</p>
                </div>
              </RouterLink>

              <RouterLink to="/courses">
                <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 shadow-md hover:border-cyan-500 transition">
                  <h3 className="text-xl font-bold text-cyan-300 mb-2">AI Tools Diploma</h3>
                  <p className="text-zinc-400 text-sm">ChatGPT, Midjourney, Canva, and more</p>
                </div>
              </RouterLink>

              <RouterLink to="/courses">
                <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 shadow-md hover:border-cyan-500 transition">
                  <h3 className="text-xl font-bold text-cyan-300 mb-2">Spoken English</h3>
                  <p className="text-zinc-400 text-sm">AC/LC Level, Interview Skills, Fluency Training</p>
                </div>
              </RouterLink>

              <RouterLink to="/courses">
                <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 shadow-md hover:border-cyan-500 transition">
                  <h3 className="text-xl font-bold text-cyan-300 mb-2">PGDCA</h3>
                  <p className="text-zinc-400 text-sm">MS Office, Advanced Excel, Tally</p>
                </div>
              </RouterLink>

              <RouterLink to="/courses">
                <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 shadow-md hover:border-cyan-500 transition">
                  <h3 className="text-xl font-bold text-cyan-300 mb-2">✨Explore Courses Now!</h3>
                  <p className="text-zinc-400 text-sm">Limited Seats Available</p>
                </div>
              </RouterLink>
            </div>
          </section>
        </Fade>

        {/* Tuition & TOSS Section */}
        <Fade direction="up" triggerOnce>
          <Element name="tuitions" />
          <section className="mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-10">
              ✅ Tuition & Open School Programs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <RouterLink to="/contact">
                <div className="bg-zinc-900 p-6 rounded-xl border border-purple-600 shadow-md hover:border-cyan-500 transition">
                  <h3 className="text-xl font-bold text-purple-400 mb-2">Tuition Classes (All Boards)</h3>
                  <ul className="list-disc list-inside text-zinc-300 text-sm space-y-1">
                    <li>Nursery – 8th (1st Batch)</li>
                    <li>9th – 10th (Each Batch)</li>
                    <li>Intermediate – CEC, MPC, BiPC</li>
                  </ul>
                </div>
              </RouterLink>

              <RouterLink to="/contact">
                <div className="bg-zinc-900 p-6 rounded-xl border border-orange-500 shadow-md hover:border-cyan-500 transition">
                  <h3 className="text-xl font-bold text-orange-400 mb-2">TOSS (Open School)</h3>
                  <ul className="list-disc list-inside text-zinc-300 text-sm space-y-1">
                    <li>10th Class & Intermediate</li>
                    <li>One Sitting – 5 Subjects</li>
                    <li>Sunday Classes Available</li>
                  </ul>
                </div>
              </RouterLink>

              <RouterLink to="/contact">
                <div className="bg-zinc-900 p-6 rounded-xl border border-cyan-500 shadow-md hover:border-cyan-400 transition">
                  <h3 className="text-xl font-bold text-cyan-300 mb-2">Intermediate Specializations</h3>
                  <ul className="list-disc list-inside text-zinc-300 text-sm space-y-1">
                    <li>MPC – Maths, Physics, Chemistry</li>
                    <li>CEC – Commerce, Economics, Civics</li>
                    <li>BiPC – Biology, Physics, Chemistry</li>
                  </ul>
                </div>
              </RouterLink>

              <RouterLink to="/contact">
                <div className="bg-zinc-900 p-6 rounded-xl border border-yellow-500 shadow-md hover:border-cyan-500 transition">
                  <h3 className="text-xl font-bold text-yellow-300 mb-2">10th Class Support</h3>
                  <ul className="list-disc list-inside text-zinc-300 text-sm space-y-1">
                    <li>State & CBSE Boards</li>
                    <li>Doubt Clarification Sessions</li>
                    <li>Exam-Oriented Preparation</li>
                  </ul>
                </div>
              </RouterLink>

              <RouterLink to="/contact">
                <div className="bg-zinc-900 p-6 rounded-xl border border-green-500 shadow-md hover:border-cyan-500 transition">
                  <h3 className="text-xl font-bold text-green-300 mb-2">Career Guidance & Counseling</h3>
                  <ul className="list-disc list-inside text-zinc-300 text-sm space-y-1">
                    <li>Help choosing career paths</li>
                    <li>Bridge between school & tech</li>
                    <li>Guidance for Open Schooling</li>
                  </ul>
                </div>
              </RouterLink>

              <RouterLink to="/contact">
                <div className="bg-zinc-900 p-6 rounded-xl border border-red-400 shadow-md hover:border-cyan-500 transition">
                  <h3 className="text-lg font-bold text-green-300 mb-2">✨Explore Tuition & Open School Programs</h3>
                  <ul className="list-disc list-inside text-zinc-300 text-sm space-y-1">
                    <li>Limited Seats Available</li>
                    <li>Start your Future TODAY!</li>
                    <li>Personalized Academic Support</li>
                  </ul>
                </div>
              </RouterLink>
            </div>
          </section>
        </Fade>

        {/* Call to Action */}
        <section className="text-center mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to kickstart your tech career?
          </h2>
          <RouterLink
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold px-8 py-3 rounded-md transition-all shadow-lg"
          >
            Get Started Now
          </RouterLink>
        </section>

        {/* Scroll to Top */}
        <ScrollLink
          to="top"
          smooth={true}
          duration={500}
          className="fixed bottom-6 right-6 bg-cyan-600 hover:bg-cyan-400 text-black p-3 rounded-full shadow-lg z-50 transition cursor-pointer"
        >
          ↑
        </ScrollLink>
      </div>
    </>
  );
};

export default Home;