import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const UserRoute = ({ children }) => {
    const { user, isAuthenticated, isLoading } = useSelector((state) => state.auth);
    const location = useLocation();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen bg-black">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    if (isAuthenticated && user?.role === 'user') {
        return children;
    }

    // Redirect to home or login if not a regular user
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default UserRoute;
