import { FaArrowRight } from "react-icons/fa";
import React from 'react';
import Marque from '../shared/Marque';
import ProjectCard from "../shared/ProjectCard";
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
                            {/* Image Section */}
                            <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center overflow-hidden">
                                <img src={pic1} alt="Image description" className="w-full h-full object-cover" />
                            </div>

                            {/* Tags and Date Section */}
                            <div className="mt-4 flex gap-6 items-center">
                                <span className="text-xs p-1 border-l-2 border-r-2 text-center rounded-lg backdrop-blur-3xl opacity-70 shadow-lg border-primary bg-slate-950">Mobile App Development</span>
                                <span className="text-xs p-1 border-l-2 border-r-2 text-center rounded-lg backdrop-blur-3xl opacity-70 shadow-lg border-primary bg-slate-950">21 April 2024</span>
                            </div>

                            {/* Title Section */}
                            <h2 className="text-xl font-semibold mt-4">Unveiling the Secrets of Successful Mobile App Deve...</h2>

                            {/* Description Section */}
                            <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>

                            {/* Read More Section */}
                            <a href="#" className="text-primary mt-4 block">Read More</a>
                        </div>

                        {/* card-2 */}
                        <div className="bg-black text-white rounded-2xl py-4 cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105">
                            {/* Image Section */}
                            <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center overflow-hidden">
                                <img src={pic2} alt="Image description" className="w-full h-full object-cover" />
                            </div>

                            {/* Tags and Date Section */}
                            <div className="mt-4 flex gap-6 items-center">
                                <span className="text-xs p-1 border-l-2 border-r-2 text-center rounded-lg backdrop-blur-3xl opacity-70 shadow-lg border-primary bg-slate-950">Mobile App Development</span>
                                <span className="text-xs p-1 border-l-2 border-r-2 text-center rounded-lg backdrop-blur-3xl opacity-70 shadow-lg border-primary bg-slate-950">21 April 2024</span>
                            </div>

                            {/* Title Section */}
                            <h2 className="text-xl font-semibold mt-4">Unveiling the Secrets of Successful Mobile App Deve...</h2>

                            {/* Description Section */}
                            <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>

                            {/* Read More Section */}
                            <a href="#" className="text-primary mt-4 block">Read More</a>
                        </div>

                        {/* card-3 */}
                        <div className="bg-black text-white rounded-2xl py-4 cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105">
                            {/* Image Section */}
                            <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center overflow-hidden">
                                <img src="your-image-url.jpg" alt="Image description" className="w-full h-full object-cover" />
                            </div>

                            {/* Tags and Date Section */}
                            <div className="mt-4 flex gap-6 items-center">
                                <span className="text-xs p-1 border-l-2 border-r-2 text-center rounded-lg backdrop-blur-3xl opacity-70 shadow-lg border-primary bg-slate-950">Mobile App Development</span>
                                <span className="text-xs p-1 border-l-2 border-r-2 text-center rounded-lg backdrop-blur-3xl opacity-70 shadow-lg border-primary bg-slate-950">21 April 2024</span>
                            </div>

                            {/* Title Section */}
                            <h2 className="text-xl font-semibold mt-4">Unveiling the Secrets of Successful Mobile App Deve...</h2>

                            {/* Description Section */}
                            <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>

                            {/* Read More Section */}
                            <a href="#" className="text-primary mt-4 block">Read More</a>
                        </div>

                        {/* card-4 */}
                        <div className="bg-black text-white rounded-2xl py-4 cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105">
                            {/* Image Section */}
                            <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center overflow-hidden">
                                <img src="your-image-url.jpg" alt="Image description" className="w-full h-full object-cover" />
                            </div>

                            {/* Tags and Date Section */}
                            <div className="mt-4 flex gap-6 items-center">
                                <span className="text-xs p-1 border-l-2 border-r-2 text-center rounded-lg backdrop-blur-3xl opacity-70 shadow-lg border-primary bg-slate-950">Mobile App Development</span>
                                <span className="text-xs p-1 border-l-2 border-r-2 text-center rounded-lg backdrop-blur-3xl opacity-70 shadow-lg border-primary bg-slate-950">21 April 2024</span>
                            </div>

                            {/* Title Section */}
                            <h2 className="text-xl font-semibold mt-4">Unveiling the Secrets of Successful Mobile App Deve...</h2>

                            {/* Description Section */}
                            <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>

                            {/* Read More Section */}
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
