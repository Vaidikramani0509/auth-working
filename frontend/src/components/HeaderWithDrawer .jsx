import React, { useState } from 'react';
import { useAuthStore } from "../store/authStore";
import { Link } from 'react-router-dom';

function HeaderWithDrawer() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [sectionOpen, setSectionOpen] = useState(false);
    const { logout, user } = useAuthStore();

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };
    const handleLogoutt = () => {
        logout()
    };
    const handleMouseEnter = () => {
        setSectionOpen(true);
    };
    const handleMouseLeave = () => {
        setSectionOpen(false);
    };

    return (
        <div className='sticky top-0 z-50'>
            <header className="bg-white flex justify-between items-center p-4 relative border-b ">
                <button onClick={toggleDrawer} className="text-2xl">
                    &#9776; {/* Hamburger icon */}
                </button>
                <h1 className="text-xl">Welcome! {user.name}</h1>
                <button onClick={handleLogoutt} className="bg-black text-white hover:bg-red-700 p-2 rounded-lg">
                    Logout
                </button>
            </header>

            <div
                className={`fixed top-0 left-0 w-64 h-full bg-white text-black transform ${drawerOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}
            >
                <ul className="mt-16 relative">
                    <li className="p-4 hover:bg-gray-200">
                        <Link to="/">Home</Link>
                    </li>
                    <li
                        className="p-4 hover:bg-gray-200 relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link to="/about">About</Link>
                        {/* {sectionOpen && (
                            <div className="absolute left-0 top-full mt-2 bg-gray-100 p-6 shadow-lg rounded-lg z-50">
                                <h2 className="text-2xl font-bold mb-4">About Section</h2>
                                <p className="text-gray-700">Here you can add additional information about the "About" section.</p>
                                <ul className="list-disc pl-6 mt-4">
                                    <li>Detail 1</li>
                                    <li>Detail 2</li>
                                    <li>Detail 3</li>
                                </ul>
                            </div>
                        )} */}
                    </li>
                    <li className="p-4 hover:bg-gray-200">
                        <Link to="/services">services</Link>
                    </li>
                    <li className="p-4 hover:bg-gray-200">
                        <Link to="/contact">contact</Link>
                    </li>
                </ul>
            </div>

            <div
                className={`fixed inset-0 bg-black opacity-50 z-40 ${drawerOpen ? 'block' : 'hidden'}`}
                onClick={toggleDrawer}
            ></div>
        </div>
    );
}

export default HeaderWithDrawer;
