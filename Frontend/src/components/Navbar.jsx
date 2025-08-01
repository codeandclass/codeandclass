import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/Logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClassesOpen, setIsClassesOpen] = useState(false);
    const [isSpokenEnglishOpen, setIsSpokenEnglishOpen] = useState(false);
    const location = useLocation();

    const token = localStorage.getItem('token');

    // Helper function to check if the current path matches the link
    const isActive = (path) => {
        return location.pathname === path ? 'text-cyan-500' : '';
    };

    const handleClassesToggle = () => {
        // Toggle Classes dropdown
        setIsClassesOpen((prev) => !prev);
        setIsSpokenEnglishOpen(false); // Close Spoken English dropdown
    };

    const handleSpokenEnglishToggle = () => {
        // Toggle Spoken English dropdown
        setIsSpokenEnglishOpen((prev) => !prev);
        setIsClassesOpen(false); // Close Classes dropdown
    };

    return (
        <div className="w-full bg-black text-white">
            <div className="flex w-full justify-between items-center px-6 md:px-14 py-6 fixed z-20 bg-black">
                {/* Logo */}
                <div className='w-full flex items-center justify-between'>
                    <Link to="/"><img src={Logo} className="invert w-[4rem]" alt="Logo" /></Link>
                    {/* Hamburger Icon */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? (
                                <FaTimes className="text-2xl" />
                            ) : (
                                <FaBars className="text-2xl" />
                            )}
                        </button>
                    </div>

                </div>

                {/* Desktop Nav */}
                <div className={`hidden md:flex ${token ? 'md:w-[2260vw]' : 'md:w-[440vw]'} flex-row space-x-8 items-center antialiased border px-4 py-2 rounded-2xl border-zinc-700/60 bg-zinc-800 top-0 z-50`}>
                    {token && <Link onMouseEnter={() => {
                        setIsClassesOpen(false)
                        setIsSpokenEnglishOpen(false)
                    }}
                        to={'/dashboard'}
                        className={`text-sm font-bold px-2 py-2 rounded-md hover:bg-[#3f3f45] transition-all ${isActive('/dashboard')}`}
                    >
                        Dashboard
                    </Link>}

                    <Link onMouseEnter={() => {
                        setIsClassesOpen(false)
                        setIsSpokenEnglishOpen(false)
                    }}
                        to={'/'}
                        className={`text-sm font-bold px-2 py-2 rounded-md hover:bg-[#3f3f45] transition-all ${isActive('/home')}`}
                    >
                        Home
                    </Link>

                    {/* Classes Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => {
                            setIsClassesOpen(true)
                            setIsSpokenEnglishOpen(false)
                        }}
                    >
                        <button
                            className="text-sm font-bold px-2 py-2 rounded-md hover:bg-[#3f3f45] transition-all"
                            onClick={handleClassesToggle} // Toggle dropdown on click
                        >
                            Classes
                        </button>
                        {isClassesOpen && (
                            <div onMouseLeave={() => setIsClassesOpen(false)} className="absolute top-full left-0 bg-zinc-800 w-48 mt-2 rounded-lg shadow-lg">
                                {['Class-10', 'Intermediate'].map((text, idx) => {
                                    const path = `/classes/${text}`;
                                    return (
                                        <Link
                                            key={idx}
                                            to={path}
                                            className={`block text-sm font-semibold text-white hover:bg-[#3f3f45] px-4 py-2 ${isActive(path)}`}
                                        >
                                            {text}
                                        </Link>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Spoken English Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => {
                            setIsSpokenEnglishOpen(true)
                            setIsClassesOpen(false)
                        }}
                    >
                        <button
                            className="text-sm font-bold px-2 py-2 rounded-md hover:bg-[#3f3f45] transition-all"
                            onClick={handleSpokenEnglishToggle} // Toggle dropdown on click
                        >
                            Spoken English
                        </button>
                        {isSpokenEnglishOpen && (
                            <div onMouseLeave={() => setIsSpokenEnglishOpen(false)} className="absolute top-full left-0 bg-zinc-800 w-48 mt-2 rounded-lg shadow-lg">
                                {['Beginner', 'Intermediate', 'Advanced'].map((text, idx) => {
                                    const path = `/spoken-english/${text}`;
                                    return (
                                        <Link
                                            key={idx}
                                            to={path}
                                            className={`block text-sm font-semibold text-white hover:bg-[#3f3f45] px-4 py-2 ${isActive(path)}`}
                                        >
                                            {text}
                                        </Link>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Courses Link */}
                    <Link
                        to={'/courses'}
                        className={`text-sm font-bold px-2 py-2 rounded-md hover:bg-[#3f3f45] transition-all ${isActive('/courses')}`}
                        onMouseEnter={() => {
                            setIsSpokenEnglishOpen(false)
                            setIsClassesOpen(false)
                        }}
                    >
                        Courses
                    </Link>

                    <Link
                        to={'/notes'}
                        className={`text-sm font-bold px-2 py-2 rounded-md hover:bg-[#3f3f45] transition-all ${isActive('/notes')}`}
                        onMouseEnter={() => {
                            setIsSpokenEnglishOpen(false)
                            setIsClassesOpen(false)
                        }}
                    >
                        Notes
                    </Link>

                    {/* Certificate Verification Link */}
                    <Link
                        to={'/certificate-verification'}
                        className={`text-sm font-bold px-2 py-2 rounded-md hover:bg-[#3f3f45] transition-all ${isActive('/certificate-verification')}`}
                        onMouseEnter={() => {
                            setIsSpokenEnglishOpen(false)
                            setIsClassesOpen(false)
                        }}
                    >
                        Certificate Verification
                    </Link>

                    <Link
                        to={'/ngos'}
                        className={`text-sm font-bold px-2 py-2 rounded-md hover:bg-[#3f3f45] transition-all ${isActive('/ngos')}`}
                        onMouseEnter={() => {
                            setIsSpokenEnglishOpen(false)
                            setIsClassesOpen(false)
                        }}
                    >
                        Partner NGOs
                    </Link>

                    <Link
                        onMouseEnter={() => {
                            setIsSpokenEnglishOpen(false)
                            setIsClassesOpen(false)
                        }}
                        to={'/gallery'}
                        className={`text-sm font-bold px-2 py-2 rounded-md hover:bg-[#3f3f45] transition-all ${isActive('/gallery')}`}
                    >
                        Gallery
                    </Link>

                    {/* Contact Link */}
                    <Link
                        onMouseEnter={() => {
                            setIsSpokenEnglishOpen(false)
                            setIsClassesOpen(false)
                        }}
                        to={'/contact'}
                        className={`text-sm font-bold px-2 py-2 rounded-md hover:bg-[#3f3f45] transition-all ${isActive('/contact')}`}
                    >
                        Contact
                    </Link>

                    {token && <Link
                        onMouseEnter={() => {
                            setIsSpokenEnglishOpen(false)
                            setIsClassesOpen(false)
                        }}
                        to={'/logout'}
                        className={`text-sm text-red-500 font-bold px-2 py-2 rounded-md hover:bg-[#3f3f45] transition-all ${isActive('/logout')}`}
                    >
                        Logout
                    </Link>}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden relative top-28 flex flex-col items-center px-6 pb-6 space-y-4 z-30">

                    {token && <Link
                        to={'/dashboard'}
                        className={`text-sm font-semibold text-white hover:underline ${isActive('/dashboard')}`}
                        onClick={() => {
                            setIsOpen(false);
                            setIsClassesOpen(false);
                            setIsSpokenEnglishOpen(false);
                        }}
                    >
                        Dashboard
                    </Link>}

                    <Link
                        to={'/'}
                        className={`text-sm font-semibold text-white hover:underline ${isActive('/home')}`}
                        onClick={() => {
                            setIsOpen(false);
                            setIsClassesOpen(false);
                            setIsSpokenEnglishOpen(false);
                        }}
                    >
                        Home
                    </Link>

                    {/* Classes Dropdown */}
                    <div className="w-full flex flex-col items-center">
                        <button
                            onClick={() => {
                                setIsClassesOpen(!isClassesOpen);
                                setIsSpokenEnglishOpen(false);
                            }}
                            className="text-sm font-semibold text-white hover:underline"
                        >
                            Classes
                        </button>
                        {isClassesOpen && (
                            <div className="flex flex-col ml-4 mt-2 space-y-2 items-center">
                                {['Class-10', 'Intermediate'].map((text, idx) => {
                                    const path = `/classes/${text}`;
                                    return (
                                        <Link
                                            key={idx}
                                            to={path}
                                            className={`text-sm font-semibold text-white hover:underline ${isActive(path)}`}
                                            onClick={() => {
                                                setIsOpen(false);
                                                setIsClassesOpen(false);
                                                setIsSpokenEnglishOpen(false);
                                            }}
                                        >
                                            {text}
                                        </Link>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Spoken English Dropdown */}
                    <div className="w-full flex flex-col items-center">
                        <button
                            onClick={() => {
                                setIsSpokenEnglishOpen(!isSpokenEnglishOpen);
                                setIsClassesOpen(false);
                            }}
                            className="text-sm font-semibold text-white hover:underline"
                        >
                            Spoken English
                        </button>
                        {isSpokenEnglishOpen && (
                            <div className="flex flex-col ml-4 mt-2 space-y-2">
                                {['Beginner', 'Intermediate', 'Advanced'].map((text, idx) => {
                                    const path = `/spoken-english/${text}`;
                                    return (
                                        <Link
                                            key={idx}
                                            to={path}
                                            className={`text-sm font-semibold text-white hover:underline ${isActive(path)}`}
                                            onClick={() => {
                                                setIsOpen(false);
                                                setIsClassesOpen(false);
                                                setIsSpokenEnglishOpen(false);
                                            }}
                                        >
                                            {text}
                                        </Link>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Static Links */}
                    <Link
                        to={'/courses'}
                        className={`text-sm font-semibold text-white hover:underline ${isActive('/courses')}`}
                        onClick={() => {
                            setIsOpen(false);
                            setIsClassesOpen(false);
                            setIsSpokenEnglishOpen(false);
                        }}
                    >
                        Courses
                    </Link>

                    <Link
                        to={'/notes'}
                        className={`text-sm font-bold px-2 py-2 rounded-md hover:bg-[#3f3f45] transition-all ${isActive('/notes')}`}
                        onMouseEnter={() => {
                            setIsOpen(false);
                            setIsSpokenEnglishOpen(false)
                            setIsClassesOpen(false)
                        }}
                    >
                        Notes
                    </Link>

                    <Link
                        to={'/certificate-verification'}
                        className={`text-sm font-semibold text-white hover:underline ${isActive('/certificate-verification')}`}
                        onClick={() => {
                            setIsOpen(false);
                            setIsClassesOpen(false);
                            setIsSpokenEnglishOpen(false);
                        }}
                    >
                        Certificate Verification
                    </Link>

                    <Link
                        to={'/ngos'}
                        className={`text-sm font-semibold text-white hover:underline ${isActive('/ngos')}`}
                        onClick={() => {
                            setIsOpen(false);
                            setIsClassesOpen(false);
                            setIsSpokenEnglishOpen(false);
                        }}
                    >
                        Partner NGOs
                    </Link>

                    <Link
                        to={'/gallery'}
                        className={`text-sm font-semibold text-white hover:underline ${isActive('/gallery')}`}
                        onClick={() => {
                            setIsOpen(false);
                            setIsClassesOpen(false);
                            setIsSpokenEnglishOpen(false);
                        }}
                    >
                        Gallery
                    </Link>

                    <Link
                        to={'/contact'}
                        className={`text-sm font-semibold text-white hover:underline ${isActive('/contact')}`}
                        onClick={() => {
                            setIsOpen(false);
                            setIsClassesOpen(false);
                            setIsSpokenEnglishOpen(false);
                        }}
                    >
                        Contact
                    </Link>

                    {token && <Link
                        to={'/logout'}
                        className={`text-sm text-red-500 font-semibold hover:underline ${isActive('/logout')}`}
                        onClick={() => {
                            setIsOpen(false);
                            setIsClassesOpen(false);
                            setIsSpokenEnglishOpen(false);
                        }}
                    >
                        Logout
                    </Link>}
                </div>
            )}
        </div>
    );
};

export default Navbar;
