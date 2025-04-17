import { FaArrowRight } from "react-icons/fa";
import React from 'react';
import Marque from '../shared/Marque';

import pic1 from "../../assets/cooing page.jpg";
import pic2 from "../../assets/bp.jpg";

const NewsBlogs = () => {
    return (
        <div>
            <section className='bg-black  md:p-0'>
                <div>
                    <Marque />
                </div>
                <div className='w-full md:w-10/12 mx-auto py-12 md:py-20 px-4 md:px-0'>
                    <div className='flex items-center gap-2'>
                        <hr className='w-6 h-1 bg-primary border-0' />
                        <h1 className='text-white font-semibold text-lg md:text-xl'> News & Blogs</h1>
                    </div>
                    <h1 className='text-2xl md:text-3xl mt-1 text-white font-bold'>Our Latest News & Blogs</h1>
                    <div className='flex justify-between items-center mt-6'>
                        <p className='text-3xl md:text-4xl font-bold text-primary'>News & Blogs</p>
                        {/* The button is hidden on mobile and shown on medium screens and up */}
                        <div className="hidden md:flex gap-2 items-center text-lg md:text-xl mt-1 text-white pr-2 rounded-3xl bg-white">
                            <p className="text-lg md:text-xl text-white px-3 py-2 rounded-3xl bg-primary">Learn More</p>
                            <p>
                                <FaArrowRight size={30} className="bg-black p-2 rounded-full text-primary" />
                            </p>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mt-8'>


                        {/* card-1 */}
                        <div className="bg-black text-white rounded-2xl py-4 cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105">
                            <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center overflow-hidden">
                                <img src={pic1} alt="App UI Showcase" className="w-full h-full object-cover" />
                            </div>
                            <div className="mt-4 flex gap-6 items-center">
                                <span className="text-xs p-1 border-l-2 border-r-2 rounded-lg backdrop-blur-3xl shadow-lg border-primary bg-slate-950">UI/UX Design</span>
                                <span className="text-xs p-1 border-l-2 border-r-2 rounded-lg backdrop-blur-3xl shadow-lg border-primary bg-slate-950">10 April 2024</span>
                            </div>
                            <h2 className="text-xl font-semibold mt-4">Designing Intuitive Mobile Experiences in 2024</h2>
                            <p className="text-sm mt-2">Explore how user-centered design is reshaping app engagement and user satisfaction in today's fast-moving tech world.</p>
                            <a href="#" className="text-primary mt-4 block">Read More</a>
                        </div>

                        {/* card-2 */}
                        <div className="bg-black text-white rounded-2xl py-4 cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105">
                            <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center overflow-hidden">
                                <img src={pic2} alt="Dev Team Meeting" className="w-full h-full object-cover" />
                            </div>
                            <div className="mt-4 flex gap-6 items-center">
                                <span className="text-xs p-1 border-l-2 border-r-2 rounded-lg backdrop-blur-3xl shadow-lg border-primary bg-slate-950">Team Culture</span>
                                <span className="text-xs p-1 border-l-2 border-r-2 rounded-lg backdrop-blur-3xl shadow-lg border-primary bg-slate-950">15 April 2024</span>
                            </div>
                            <h2 className="text-xl font-semibold mt-4">Inside Our Team: How Collaboration Drives Innovation</h2>
                            <p className="text-sm mt-2">Get a peek behind the scenes at how our team works together to build creative solutions and tackle digital challenges.</p>
                            <a href="#" className="text-primary mt-4 block">Read More</a>
                        </div>

                        {/* card-3 */}
                        <div className="bg-black text-white rounded-2xl py-4 cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105">
                            <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center overflow-hidden">
                                <img src="your-image-url.jpg" alt="Analytics Dashboard" className="w-full h-full object-cover" />
                            </div>
                            <div className="mt-4 flex gap-6 items-center">
                                <span className="text-xs p-1 border-l-2 border-r-2 rounded-lg backdrop-blur-3xl shadow-lg border-primary bg-slate-950">Marketing</span>
                                <span className="text-xs p-1 border-l-2 border-r-2 rounded-lg backdrop-blur-3xl shadow-lg border-primary bg-slate-950">18 April 2024</span>
                            </div>
                            <h2 className="text-xl font-semibold mt-4">Boosting App Visibility: Growth Tactics That Work</h2>
                            <p className="text-sm mt-2">Discover the strategies we use to amplify app downloads and keep users coming back through performance-driven marketing.</p>
                            <a href="#" className="text-primary mt-4 block">Read More</a>
                        </div>

                        {/* card-4 */}
                        <div className="bg-black text-white rounded-2xl py-4 cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105">
                            <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center overflow-hidden">
                                <img src="your-image-url.jpg" alt="Code Snippets" className="w-full h-full object-cover" />
                            </div>
                            <div className="mt-4 flex gap-6 items-center">
                                <span className="text-xs p-1 border-l-2 border-r-2 rounded-lg backdrop-blur-3xl shadow-lg border-primary bg-slate-950">Development</span>
                                <span className="text-xs p-1 border-l-2 border-r-2 rounded-lg backdrop-blur-3xl shadow-lg border-primary bg-slate-950">21 April 2024</span>
                            </div>
                            <h2 className="text-xl font-semibold mt-4">Next.js vs React: What We Chose and Why</h2>
                            <p className="text-sm mt-2">We break down the pros and cons of React and Next.js — and why one of them fits our workflow better for client projects.</p>
                            <a href="#" className="text-primary mt-4 block">Read More</a>
                        </div>


                    </div>

                </div>
                <div>
                    <Marque />
                </div>
            </section>
        </div>
    );
};

export default NewsBlogs;
