import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Courses from './Pages/Courses';
import CourseDetailed from './Pages/CourseDetailed';
import CertificateVerification from './Pages/CertificateVerification';
import Contact from './Pages/Contact';
import Footer from './components/Footer';
import Progress from './components/LectureProgress';
import Dashboard from './Pages/admin/Dashboard';
import AddLectures from './Pages/admin/AddLectures';
import AddSpokenEnglishLecture from './Pages/admin/AddSpokenEnglishLecture';
import AddCourse from './Pages/admin/AddCourse';
import AddCertificate from './Pages/admin/AddCertificate';
import AddUsers from './Pages/admin/AddUsers';
import EditCertificate from './Pages/admin/EditCertificate';
import EditCourse from './Pages/admin/EditCourse';
import EditLecture from './Pages/admin/EditLecture';
import EditSpokenEnglish from './Pages/admin/EditSpokenEnglish';
import EditUser from './Pages/admin/EditUser';
import Login from './Pages/admin/Login';
import PrivateRoute from './components/PrivateRoute';
import LectureProgress from './components/LectureProgress';
import SpokenEnglishProgress from './components/SpokenEnglishProgress';
import Logout from './components/Logout';
import Home from './Pages/Home';
import Notes from './Pages/Notes';
import AboutInstructor from './Pages/AboutInstructor';
import EditNotes from './Pages/admin/EditNotes';
import AddNotes from './Pages/admin/AddNotes';

const App = () => {
  return (
    <div className="bg-black">
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/courses" element={<Courses />} />

          <Route path="/courses/:courseId" element={<CourseDetailed />} />

          <Route path="/certificate-verification" element={<CertificateVerification />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/classes/:classId" element={<LectureProgress />} />

          <Route path="/spoken-english/:level" element={<SpokenEnglishProgress />} />

          <Route path="/notes" element={<Notes />} />

          <Route path="/about" element={<AboutInstructor />} />

          <Route path="/login" element={<Login />} />

          <Route path="/logout" element={<Logout />} />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route
            path="/dashboard/add-class-lecture"
            element={
              <PrivateRoute>
                <AddLectures />
              </PrivateRoute>
            }
          />

          <Route
            path="/dashboard/add-spoken-lecture"
            element={
              <PrivateRoute>
                <AddSpokenEnglishLecture />
              </PrivateRoute>
            }
          />

          <Route
            path="/dashboard/add-course"
            element={
              <PrivateRoute>
                <AddCourse />
              </PrivateRoute>
            }
          />

          <Route
            path="/dashboard/add-certificate"
            element={
              <PrivateRoute>
                <AddCertificate />
              </PrivateRoute>
            }
          />

          <Route
            path="/dashboard/add-users"
            element={
              <PrivateRoute>
                <AddUsers />
              </PrivateRoute>
            }
          />

          <Route
            path="/dashboard/edit-certificate"
            element={
              <PrivateRoute>
                <EditCertificate />
              </PrivateRoute>
            }
          />

          <Route
            path="/dashboard/edit-course"
            element={
              <PrivateRoute>
                <EditCourse />
              </PrivateRoute>
            }
          />

          <Route
            path="/dashboard/edit-lecture"
            element={
              <PrivateRoute>
                <EditLecture />
              </PrivateRoute>
            }
          />

          <Route
            path="/dashboard/edit-spoken-lecture"
            element={
              <PrivateRoute>
                <EditSpokenEnglish />
              </PrivateRoute>
            }
          />

          <Route
            path="/dashboard/edit-users"
            element={
              <PrivateRoute>
                <EditUser />
              </PrivateRoute>
            }
          />

          <Route
            path="/dashboard/add-notes"
            element={
              <PrivateRoute>
                <AddNotes />
              </PrivateRoute>
            }
          />

          <Route
            path="/dashboard/edit-notes"
            element={
              <PrivateRoute>
                <EditNotes />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;