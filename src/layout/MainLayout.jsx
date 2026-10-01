import React from 'react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';

const MainLayout = () => {
    return (
        <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
            <div>
                <Toaster position="top-center" />
                <Navbar />
                <Outlet />
                <ScrollRestoration />
                <Footer />
            </div>
        </ReactLenis>
    );
};

export default MainLayout;