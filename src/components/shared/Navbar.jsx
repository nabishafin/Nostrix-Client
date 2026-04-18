import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { useLogoutMutation } from '../../redux/features/auth/authApi';
import toast from 'react-hot-toast';
import logo from '../../assets/logo.svg';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('/');
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, isAuthenticated } = useSelector((state) => state.auth);
    const [logoutApi] = useLogoutMutation();

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'About Us', path: '/aboutus' },
        { name: 'Contact Us', path: '/Contact' }
    ];

    // Dynamic dashboard link based on role
    if (user && user.role === 'admin') {
        navItems.splice(5, 0, { name: 'Admin Dashboard', path: '/admin/dashboard' });
    }

    const links = navItems.map((item) => (
        <li key={item.path}>
            <Link
                to={item.path}
                className={`block px-3 py-2 rounded-md font-semibold ${activeLink === item.path ? 'bg-black text-primary' : 'text-white'
                    }`}
                onClick={() => setActiveLink(item.path)}
            >
                {item.name}
            </Link>
        </li>
    ));

    return (
        <div className="bg-black py-3 sticky top-0 backdrop-blur-sm z-40">
            <div className="navbar bg-black mx-auto w-12/12 md:w-10/12 px-4 md:px-0">
                <Link to={'/'} className="navbar-start">
                    <img className="h-9 md:h-10" src={logo} alt="Logo" />
                </Link>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`font-semibold ${activeLink === item.path ? 'text-primary' : 'text-white'
                                        }`}
                                    onClick={() => setActiveLink(item.path)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu */}
                <div className="navbar-end">
                    <div className="block lg:hidden">
                        <div className="dropdown dropdown-end">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost text-white bg-primary"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow bg-primary"
                            >
                                {links}
                                <li className="mt-2">
                                    <Link
                                        to="/login"
                                        className="block text-center px-4 py-2 rounded-md font-bold bg-black text-primary"
                                        onClick={() => setActiveLink('/login')}
                                    >
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Buttons: Auth & Contact */}
                    <div className="hidden md:flex items-center space-x-3 ml-3">
                        {isAuthenticated ? (
                            <button 
                                onClick={async () => {
                                    try {
                                        await logoutApi().unwrap();
                                        dispatch(logout());
                                        toast.success('Logged out successfully');
                                        navigate('/login');
                                    } catch (err) {
                                        dispatch(logout()); // Clear locally anyway
                                        navigate('/login');
                                    }
                                }}
                                className="px-5 py-2 rounded-full border-2 border-red-500 font-semibold text-white hover:bg-red-500 hover:text-black transition-all"
                            >
                                Logout
                            </button>
                        ) : (
                            <Link to="/login">
                                <button className="px-5 py-2 rounded-full border-2 border-primary font-semibold text-white hover:bg-primary hover:text-black transition-all">
                                    Login
                                </button>
                            </Link>
                        )}
                        <a
                            href="https://wa.me/8801758056337?text=Hi%20there%2C%20I%20would%20like%20to%20talk%20to%20you"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="px-5 py-2 rounded-full bg-primary font-semibold text-black hover:bg-lime-600 transition-all border-2 border-primary">
                                Let’s Talk
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
