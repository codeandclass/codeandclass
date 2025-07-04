import React from 'react';
import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const items = [
        {
            title: "Add Lectures to Classes",
            link: "/dashboard/add-class-lecture",
        },
        {
            title: "Add Spoken English Lectures",
            link: "/dashboard/add-spoken-lecture",
        },
        {
            title: "Add Courses",
            link: "/dashboard/add-course",
        },
        {
            title: "Add Certificates",
            link: "/dashboard/add-certificate",
        },
        {
            title: "Add Users",
            link: "/dashboard/add-users",
        },
        {
            title: "Add Notes",
            link: "/dashboard/add-notes",
        },
        {
            title: "Edit Lecture of Classes",
            link: "/dashboard/edit-lecture",
        },
        {
            title: "Edit Spoken English Lectures",
            link: "/dashboard/edit-spoken-lecture",
        },
        {
            title: "Edit Courses",
            link: "/dashboard/edit-course",
        },
        {
            title: "Edit Certificates",
            link: "/dashboard/edit-certificate",
        },
        {
            title: "Edit Users",
            link: "/dashboard/edit-users",
        },
        {
            title: "Edit Notes",
            link: "/dashboard/edit-notes",
        },
    ];

    return (
        <div className="bg-black text-white min-h-screen overflow-y-auto">

            {/* Dashboard Grid */}
            <div className="px-6 md:px-10 lg:px-20 py-12 relative top-24">
                <div className='flex justify-between'>
                    <h1 className="text-2xl md:text-3xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">
                        Admin Dashboard
                    </h1>
                    <span className="text-xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">Hi, from Code & Class</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 h-[30rem]">
                    {items.map((item, index) => (
                        <Link key={index} to={item.link}>
                            <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 hover:shadow-xl hover:shadow-cyan-500/30 transition-all h-full flex items-center justify-center text-center">
                                <span className="text-cyan-400 font-semibold text-md md:text-lg leading-relaxed">
                                    {item.title}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
