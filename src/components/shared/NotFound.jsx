// src/pages/NotFound.jsx
import { div } from 'framer-motion/client';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center h-[500px] bg-white px-4 text-center">
                <h1 className="text-9xl font-bold text-primary">404</h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">Oops! Page not Found</h2>
                <p className="text-gray-500 mt-2 mb-6">
                    The page you are looking for cannot be found, take a break before trying again.
                </p>
                <button
                    onClick={() => navigate('/')}
                    className="bg-primary text-white font-semibold px-6 py-2 rounded-full hover:bg-black transition"
                >
                    Get A Quote
                </button>
            </div>
            <Footer />
        </div>
    );
};

export default NotFound;
