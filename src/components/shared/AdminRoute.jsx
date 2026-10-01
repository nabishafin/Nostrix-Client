import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';

const NotAdminRedirect = () => {
    useEffect(() => {
        toast.error('Admin access only. Your account is not an admin.', { id: 'not-admin' });
    }, []);
    return <Navigate to="/" replace />;
};

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

    // Not logged in -> go to login page
    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // Logged in as admin
    if (user?.role === 'admin') {
        return children;
    }

    // Logged in but not an admin
    return <NotAdminRedirect />;
};

export default AdminRoute;
