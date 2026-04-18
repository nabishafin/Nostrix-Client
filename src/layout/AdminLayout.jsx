import React, { useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { useLogoutMutation } from '../redux/features/auth/authApi';
import toast from 'react-hot-toast';
import logo from '../assets/logo.svg';

const AdminLayout = () => {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [logoutApi] = useLogoutMutation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleLogout = async () => {
        try {
            await logoutApi().unwrap();
            dispatch(logout());
            toast.success('Logged out successfully');
            navigate('/login');
        } catch (err) {
            dispatch(logout());
            navigate('/login');
        }
    };

    const navLinks = [
        { name: 'Dashboard', path: '/admin/dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
        { name: 'Users', path: '/admin/users', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
        { name: 'Projects', path: '/admin/projects', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
        { name: 'Blogs', path: '/admin/blogs', icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z' },
    ];

    return (
        <div className="flex h-screen bg-black text-white selection:bg-[#20D374] selection:text-black font-sans">
            {/* Premium Sidebar */}
            <aside 
                className={`bg-[#0a0a0a] border-r border-white/5 transition-all duration-500 ease-in-out flex flex-col relative z-50 ${isSidebarOpen ? 'w-72' : 'w-24'}`}
            >
                {/* Logo Section */}
                <div className="h-24 flex items-center px-8 border-b border-white/5">
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-10 h-10 bg-[#20D374] rounded-2xl flex items-center justify-center p-2 shadow-[0_0_20px_rgba(32,211,116,0.3)] group-hover:rotate-12 transition-transform duration-300">
                            <img src={logo} alt="Logo" className="w-full h-full brightness-0" />
                        </div>
                        {isSidebarOpen && (
                            <div className="flex flex-col">
                                <span className="text-xl font-black tracking-tighter text-white uppercase leading-none">Nostrix</span>
                                <span className="text-[10px] font-bold text-[#20D374] tracking-[0.2em] uppercase">Admin Portal</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex-grow py-10 px-4 space-y-2">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) => 
                                `group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 relative overflow-hidden ${
                                    isActive 
                                    ? 'bg-[#20D374]/10 text-[#20D374]' 
                                    : 'text-gray-500 hover:text-white hover:bg-white/5'
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <svg className={`w-6 h-6 transition-colors ${isActive ? 'text-[#20D374]' : 'group-hover:text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={link.icon} />
                                    </svg>
                                    {isSidebarOpen && <span className="text-sm font-bold tracking-wide">{link.name}</span>}
                                    {isActive && <div className="absolute right-0 top-1/4 bottom-1/4 w-1 bg-[#20D374] rounded-l-full shadow-[0_0_10px_#20D374]"></div>}
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>

                {/* Account & Exit Section */}
                <div className="p-6 border-t border-white/5 bg-black/40">
                    <div className={`p-4 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md mb-6 transition-all ${isSidebarOpen ? 'opacity-100' : 'opacity-0 scale-90'}`}>
                        {isSidebarOpen && (
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-[#20D374] text-black rounded-xl flex items-center justify-center font-black text-xl shadow-lg shadow-[#20D374]/20">
                                    {user?.name?.charAt(0).toUpperCase()}
                                </div>
                                <div className="flex-grow min-w-0">
                                    <p className="text-sm font-black text-white truncate">{user?.name}</p>
                                    <p className="text-[10px] text-[#20D374] font-bold uppercase tracking-widest mt-0.5">{user?.role}</p>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <button 
                        onClick={handleLogout}
                        className="flex items-center gap-4 w-full px-5 py-4 text-red-500/80 hover:text-red-500 hover:bg-red-500/10 rounded-2xl transition-all duration-300 group"
                    >
                        <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        {isSidebarOpen && <span className="text-xs font-black uppercase tracking-[0.2em]">Logout</span>}
                    </button>
                    
                    {isSidebarOpen && (
                        <Link to="/" className="mt-4 flex items-center justify-center text-[10px] text-gray-600 font-bold uppercase tracking-widest hover:text-[#20D374] transition-all duration-300 opacity-60 hover:opacity-100">
                            <span className="mr-2">←</span> Return to Homepage
                        </Link>
                    )}
                </div>
            </aside>

            {/* Content Area */}
            <main className="flex-grow flex flex-col min-w-0 bg-[#000000]">
                {/* Advanced Header */}
                <header className="h-24 bg-black/80 backdrop-blur-2xl border-b border-white/5 flex items-center justify-between px-10 sticky top-0 z-40">
                    <div className="flex items-center gap-8">
                        <button 
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
                            className="p-3 text-gray-500 hover:text-[#20D374] transition-all bg-white/5 hover:bg-[#20D374]/10 rounded-xl border border-white/5"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        
                        <div>
                            <p className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.3em] leading-none mb-1">Current Workspace</p>
                            <p className="text-sm font-black text-white tracking-wide">Main Administration Center</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-8">
                        <div className="hidden md:block text-right">
                            <p className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em] leading-none mb-1">Platform Status</p>
                            <div className="flex items-center gap-2 justify-end">
                                <div className="w-2 h-2 bg-[#20D374] rounded-full animate-pulse shadow-[0_0_8px_#20D374]"></div>
                                <p className="text-xs font-bold text-[#20D374] tracking-wide uppercase">Operational</p>
                            </div>
                        </div>
                        <div className="w-px h-10 bg-white/5"></div>
                        <div className="flex flex-col items-end">
                             <span className="text-[10px] font-bold text-gray-700 uppercase tracking-widest">Build 1.0.4r</span>
                             <span className="text-[9px] font-bold text-primary/40 uppercase">Production Ready</span>
                        </div>
                    </div>
                </header>

                <div className="flex-grow overflow-y-auto p-10 lg:p-16 custom-scrollbar">
                     <div className="max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 font-sans">
                        <Outlet />
                     </div>
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
