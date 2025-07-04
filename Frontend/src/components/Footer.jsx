import React from 'react';
import { FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 relative top-24 text-white px-4 md:px-10 lg:px-20 py-10 border-t border-zinc-700">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Brand & About */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400 mb-2">Code & Class</h2>
          <p className="text-sm text-zinc-400">
            Empowering students with practical coding skills and real-world project experience. Learn. Build. Grow.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-cyan-400 mb-3">Quick Links</h3>
          <ul className="text-sm text-zinc-300 space-y-2">
            <li><Link to="/" className="hover:text-cyan-400 transition">Home</Link></li>
            <li><Link to="/courses" className="hover:text-cyan-400 transition">Courses</Link></li>
            <li><Link to="/contact" className="hover:text-cyan-400 transition">Contact Us</Link></li>
            <li><Link to="/certificate-verification" className="hover:text-cyan-400 transition">Verify Certificate</Link></li>
            <li><Link to="/notes" className="hover:text-cyan-400 transition">Notes</Link></li>
            <li><Link to="/login" className="hover:text-cyan-400 transition">Login</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-cyan-400 mb-3">Connect With Us</h3>
          <div className="flex space-x-4">
            <Link to="https://www.youtube.com/@CodeAndClass" target='_blank' className="bg-cyan-500 hover:bg-cyan-400 text-black p-2 rounded-full transition">
              <FaYoutube />
            </Link>
            <Link to="https://www.instagram.com/code_and_class?igsh=ZnBsbzhtcG43Zzlk" target='_blank' className="bg-cyan-500 hover:bg-cyan-400 text-black p-2 rounded-full transition">
              <FaInstagram />
            </Link>
            <Link to="https://whatsapp.com/channel/0029VbBQoOTCHDyr0cD8Jr3j" target='_blank' className="bg-cyan-500 hover:bg-cyan-400 text-black p-2 rounded-full transition">
              <FaWhatsapp />
            </Link>
            <Link to="mailto:codeandclass.edu.ins@gmail.com" target='_blank' className="bg-cyan-500 hover:bg-cyan-400 text-black p-2 rounded-full transition">
              <SiGmail />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-zinc-700 pt-4 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Code & Class. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
