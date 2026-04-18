import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const { user, isAuthenticated, isLoading } = useSelector((state) => state.auth);
    const location = useLocation();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen bg-black">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    if (isAuthenticated && user?.role === 'admin') {
        return children;
    }

    // Redirect to home if not admin
    return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoute;
