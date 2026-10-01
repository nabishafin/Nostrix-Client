import React, { useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { useLogoutMutation } from '../redux/features/auth/authApi';
import toast from 'react-hot-toast';
import logo from '../assets/logo.svg';

const navLinks = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { name: 'Users', path: '/admin/users', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
    { name: 'Projects', path: '/admin/projects', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
    { name: 'Blogs', path: '/admin/blogs', icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z' },
];

const AdminLayout = () => {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [logoutApi] = useLogoutMutation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleLogout = async () => {
        try {
            await logoutApi().unwrap();
            toast.success('Logged out successfully');
        } catch {
            // clear locally anyway
        }
        dispatch(logout());
        navigate('/login');
    };

    return (
        <div className="flex h-screen bg-[#0b0b0b] text-gray-200 text-sm">
            {/* Sidebar */}
            <aside className={`bg-[#0f0f0f] border-r border-white/10 flex flex-col shrink-0 transition-all duration-200 ${isSidebarOpen ? 'w-56' : 'w-16'}`}>
                <div className="h-14 flex items-center gap-2 px-4 border-b border-white/10">
                    <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center p-1.5 shrink-0">
                        <img src={logo} alt="Logo" className="w-full h-full brightness-0" />
                    </div>
                    {isSidebarOpen && (
                        <div className="leading-tight">
                            <p className="text-sm font-bold text-white">Nostrix</p>
                            <p className="text-[10px] text-primary uppercase tracking-wider">Admin</p>
                        </div>
                    )}
                </div>

                <nav className="flex-1 p-2 space-y-1">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            title={link.name}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                                    isActive ? 'bg-primary/15 text-primary' : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`
                            }
                        >
                            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={link.icon} />
                            </svg>
                            {isSidebarOpen && <span className="font-medium">{link.name}</span>}
                        </NavLink>
                    ))}
                </nav>

                <div className="p-2 border-t border-white/10 space-y-1">
                    {isSidebarOpen && (
                        <div className="flex items-center gap-2 px-3 py-2">
                            <div className="w-8 h-8 bg-primary text-black rounded-md flex items-center justify-center font-bold shrink-0">
                                {user?.name?.charAt(0).toUpperCase()}
                            </div>
                            <div className="min-w-0">
                                <p className="text-xs font-semibold text-white truncate">{user?.name}</p>
                                <p className="text-[10px] text-gray-500 uppercase">{user?.role}</p>
                            </div>
                        </div>
                    )}
                    <Link to="/" title="Back to site" className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        {isSidebarOpen && <span>View Site</span>}
                    </Link>
                    <button onClick={handleLogout} title="Logout" className="flex items-center gap-3 w-full px-3 py-2 rounded-md text-red-400 hover:bg-red-500/10 transition-colors">
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        {isSidebarOpen && <span>Logout</span>}
                    </button>
                </div>
            </aside>

            {/* Content */}
            <main className="flex-1 flex flex-col min-w-0">
                <header className="h-14 bg-[#0f0f0f] border-b border-white/10 flex items-center justify-between px-4 shrink-0">
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                        aria-label="Toggle sidebar"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                </header>

                <div className="flex-1 overflow-y-auto p-4 md:p-6">
                    <div className="max-w-6xl mx-auto">
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
