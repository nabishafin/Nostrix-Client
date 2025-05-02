import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('/');
    const location = useLocation();

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
                            </ul>
                        </div>
                    </div>

                    {/* Let’s Talk Button */}
                    <div className="hidden md:block ml-3">
                        <a
                            href="https://wa.me/8801758056337?text=Hi%20there%2C%20I%20would%20like%20to%20talk%20to%20you"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="px-4 py-2 rounded-full bg-primary font-semibold text-black hover:bg-lime-600">
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
