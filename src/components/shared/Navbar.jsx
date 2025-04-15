import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import logo from '../../assets/logo.svg';

const Navbar = () => {
    // State to track the active link
    const [activeLink, setActiveLink] = useState('/');

    // Get the current path from useLocation hook
    const location = useLocation();

    // Set the active link based on the current path
    React.useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const links = (
        <>
            <li>
                <Link
                    to="/"
                    className={activeLink === '/' ? 'text-primary' : 'text-white'}
                    onClick={() => setActiveLink('/')}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    to="/services"
                    className={activeLink === '/services' ? 'text-primary' : 'text-white'}
                    onClick={() => setActiveLink('/services')}
                >
                    Services
                </Link>
            </li>
            <li>
                <Link
                    to="/projects"
                    className={activeLink === '/projects' ? 'text-primary' : 'text-white'}
                    onClick={() => setActiveLink('/projects')}
                >
                    Projects
                </Link>
            </li>
            <li>
                <Link
                    to="/blogs"
                    className={activeLink === '/blogs' ? 'text-primary' : 'text-white'}
                    onClick={() => setActiveLink('/blogs')}
                >
                    Blogs
                </Link>
            </li>
            <li>
                <Link
                    to="/aboutus"
                    className={activeLink === '/aboutus' ? 'text-primary' : 'text-white'}
                    onClick={() => setActiveLink('/about-us')}
                >
                    About Us
                </Link>
            </li>
            <li>
                <Link
                    to="/Contact"
                    className={activeLink === '/Contact' ? 'text-primary' : 'text-white'}
                    onClick={() => setActiveLink('/contact-us')}
                >
                    Contact Us
                </Link>
            </li>
        </>
    );

    return (
        <div className="bg-black py-3 sticky top-0 backdrop:blur-sm z-40">
            <div className="navbar bg-black sticky top-0 z-50 mx-auto w-10/12">
                <div className="navbar-start">
                    <img className="h-9 md:h-10 pl-0" src={logo} alt="Logo" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white font-semibold">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end pr-0 md:pr-3">
                    <div className="block md:hidden">
                        <div className="dropdown dropdown-end">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost lg:hidden text-white bg-secondary"
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
                                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow text-secondary"
                            >
                                {links}
                            </ul>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <Button text={"Let’s Talk"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
