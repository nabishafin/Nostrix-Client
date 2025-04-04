import React from 'react';
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram, FaGlobe, FaArrowRight } from 'react-icons/fa'; // Import icons
import logo from '../../assets/logo.svg';
import Marque from './Marque';

const Footer = () => {
    return (
        <section className='mt-10 md:mt-40'>
            <div>
                <Marque />
            </div>
            <footer className="bg-black text-white py-10">
                <div className="md:w-10/12 px-4 md:px-0 mx-auto ">
                    {/* Top Section */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                        <h2 className="text-3xl font-bold text-center md:text-left">Let's <span className='text-primary'>Connect</span> there</h2>
                        <div className="flex justify-center md:justify-start gap-2 items-center text-lg md:text-xl mt-4 md:mt-0 text-white pr-2 rounded-3xl bg-white">
                            <p className="text-lg md:text-xl text-white px-3 py-2 rounded-3xl bg-primary">Contact Us Now</p>
                            <p>
                                <FaArrowRight size={30} className="bg-black p-2 rounded-full text-primary" />
                            </p>
                        </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Digital Agency Section */}
                        <div className="min-w-[250px]">
                            <div className="flex items-center mb-4">
                                <img src={logo} alt="Logo" className="h-16" />
                            </div>
                            <p className="text-gray-400 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="flex space-x-4">
                                <FaFacebook className="text-2xl text-gray-400" />
                                <FaTwitter className="text-2xl text-gray-400" />
                                <FaPinterest className="text-2xl text-gray-400" />
                                <FaInstagram className="text-2xl text-gray-400" />
                            </div>
                        </div>

                        {/* Navigation Section */}
                        <div className='min-w-[250px] ml-0 md:ml-40'>
                            <h4 className="text-lg font-semibold mb-4 text-primary">Navigation</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Projects</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
                            </ul>
                        </div>

                        {/* Contact Section */}
                        <div className="min-w-[250px]">
                            <h4 className="text-lg font-semibold mb-4 text-primary">Contact</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">+0123-456-789</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">www.example.com</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">example@gmail.com</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">4517 Washington Ave. Manchester, Kentucky 39495</a></li>
                            </ul>
                        </div>

                        {/* Get the latest information Section */}
                        <div className="min-w-[250px]">
                            <h4 className="text-lg font-semibold mb-4">Get the latest information</h4>
                            <div className="flex flex-col md:flex-row items-center">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="bg-gray-800 text-white rounded-l-full px-4 py-2 w-full md:w-80 mb-4 md:mb-0"
                                />
                                <button className="bg-primary text-black px-4 py-2 rounded-r-full">
                                    <FaGlobe className="text-xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-5" />
                    {/* Bottom Copyright Section */}
                    <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-sm">
                        <p className="text-center md:text-left">
                            Copyright © 2024 Digital Agency. All Rights Reserved.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">User Terms & Conditions</a>
                            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;
