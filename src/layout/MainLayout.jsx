import React from 'react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
            <Toaster position="top-center" />
            <Navbar />
            <Outlet />
            <ScrollRestoration />
            <Footer />
        </div>
    );
};

export default MainLayout;