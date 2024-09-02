import React from 'react';
import { useAuthStore } from '../store/authStore';

const Header = () => {
    const { user, logout } = useAuthStore();

    const handleLogout = () => {
        logout();
    };

    return (
        <header className="bg-blue-600 text-white py-4 pr-6">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left Side Logo */}
                <div className="flex items-center">
                    <img src="https://www.shutterstock.com/shutterstock/photos/1532816324/display_1500/stock-vector-vr-or-rv-logo-and-icon-designs-1532816324.jpg " alt="Logo" className="h-10 mr-3" />
                    <h1 className="text-2xl font-bold">My Website</h1>
                </div>
                {/* Right Side Navigation */}
                <nav>
                    <ul className="flex space-x-7 ">
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><a href="/about" className="hover:underline">About</a></li>
                        <li><a href="/contact" className="hover:underline">Contact</a></li>
                        <button onClick={handleLogout}>Log Out</button>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
