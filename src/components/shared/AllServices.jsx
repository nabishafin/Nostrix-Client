import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';  // Import motion from framer-motion

const AllServices = () => {
    return (
        <div>
            {/* Service 1 - Website Development */}
            <div className="collapse bg-base-200 border-base-300 px-4 sm:px-6 md:px-10 mt-10 rounded-3xl py-4 mx-auto border transition-transform transform hover:scale-105">
                <input type="checkbox" name="my-accordion-1" />
                <div className="collapse-title font-semibold">
                    <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 justify-between'>
                        {/* Number */}
                        <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl'>01</h1>

                        {/* Title and Tags */}
                        <div className='text-center flex-1'>
                            <div className='font-bold text-2xl sm:text-3xl md:text-4xl'>Website Development</div>
                            <div className='mt-3'>
                                <div className='flex flex-wrap gap-2 justify-center mt-4'>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full md:w-auto'>React JS Development</span>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full md:w-auto'>Next js Development</span>
                                </div>
                                <div className='flex flex-wrap gap-2 mt-3 justify-center'>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full md:w-auto'>Tailwind Css</span>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full md:w-auto'>Mongo DB</span>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full md:w-auto'>Node js</span>
                                </div>
                            </div>
                        </div>

                        {/* Learn More Button */}
                        <div className='font-bold text-2xl sm:text-3xl md:text-4xl flex  md:gap-3 gap-2 cursor-pointer hover:text-primary transition-colors'>
                            Learn More
                            <p className='mt-1'>
                                <FaArrowRight size={35} className="bg-black p-2 rounded-full text-primary" />
                            </p>
                        </div>
                    </div>
                </div>

                {/* Collapsible Content with animation */}
                <motion.div
                    className="collapse-content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className='text-center mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-72 mt-6'>
                        <p className='text-sm sm:text-base md:text-lg mr-0 md:mr-56'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iure eaque ipsum, doloribus ea dicta, porro iste nesciunt, magni officiis molestiae. Architecto unde quibusdam molestias repellendus vero, commodi alias pariatur iusto sapiente harum odit laborum corporis voluptatibus voluptas nesciunt quidem?
                        </p>
                    </div>
                    <div className='flex justify-center items-center mt-6'>
                        <div className='w-full sm:w-11/12 md:w-8/12 lg:w-6/12 h-48 sm:h-64 md:h-80 m-0 md:mr-60'>
                            <img
                                className='w-full h-full object-cover rounded-lg shadow-lg'
                                src="/src/assets/webdevelopment.jpg"
                                alt="Web Development"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Service 2 - UX/UI Design */}
            <div className="collapse bg-base-200 border-base-300 px-4 sm:px-6 md:px-10 mt-10 rounded-3xl py-4 mx-auto border transition-transform transform hover:scale-105">
                <input type="checkbox" name="my-accordion-2" />
                <div className="collapse-title font-semibold">
                    <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 justify-between'>
                        {/* Number */}
                        <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl'>02</h1>

                        {/* Title and Tags */}
                        <div className='text-center flex-1'>
                            <div className='font-bold text-2xl sm:text-3xl md:text-4xl'>UX/UI Design</div>
                            <div className='mt-3'>
                                <div className='flex flex-wrap gap-2 justify-center mt-4'>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full md:w-auto'>User Research</span>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full md:w-auto'>User Personas</span>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full md:w-auto'>Usability Testing</span>
                                </div>
                                <div className='flex flex-wrap gap-2 mt-3 justify-center'>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full md:w-auto'>Wireframing</span>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full md:w-auto'>Prototyping</span>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full md:w-auto'>Visual Design</span>
                                </div>
                            </div>
                        </div>

                        {/* Learn More Button */}
                        <div className='font-bold text-2xl sm:text-3xl md:text-4xl flex  md:gap-3 gap-2 cursor-pointer hover:text-primary transition-colors'>
                            Learn More
                            <p className='mt-1'>
                                <FaArrowRight size={35} className="bg-black p-2 rounded-full text-primary" />
                            </p>
                        </div>
                    </div>
                </div>

                {/* Collapsible Content with animation */}
                <motion.div
                    className="collapse-content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className='text-center mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-72 mt-6'>
                        <p className='text-sm sm:text-base md:text-lg mr-0 md:mr-56'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iure eaque ipsum, doloribus ea dicta, porro iste nesciunt, magni officiis molestiae. Architecto unde quibusdam molestias repellendus vero, commodi alias pariatur iusto sapiente harum odit laborum corporis voluptatibus voluptas nesciunt quidem?
                        </p>
                    </div>
                    <div className='flex justify-center items-center mt-6'>
                        <div className='w-full sm:w-11/12 md:w-8/12 lg:w-6/12 h-48 sm:h-64 md:h-80 m-0 md:mr-60'>
                            <img
                                className='w-full h-full object-cover rounded-lg shadow-lg'
                                src="/src/assets/webdevelopment.jpg"
                                alt="UX/UI Design"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
            {/* Service 3 - Graphics Design */}
            <div className="collapse bg-base-200 border-base-300 px-4 sm:px-6 md:px-10 mt-10 rounded-3xl py-4 mx-auto border transition-transform transform hover:scale-105">
                <input type="checkbox" name="my-accordion-3" />
                <div className="collapse-title font-semibold">
                    <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 justify-between'>
                        {/* Number */}
                        <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl'>03</h1>

                        {/* Title and Tags */}
                        <div className='text-center flex-1'>
                            <div className='font-bold text-2xl sm:text-3xl md:text-4xl'>Graphics Design</div>
                            <div className='mt-3'>
                                <div className='flex flex-wrap gap-2 justify-center mt-4'>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full md:w-auto'>Packaging Design</span>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full md:w-auto'>Infographic Design</span>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full md:w-auto'>Illustration</span>
                                </div>
                                <div className='flex flex-wrap gap-2 mt-3 justify-center'>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full md:w-auto'>Brand Identity Design</span>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full md:w-auto'>Print Design</span>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full md:w-auto'>Digital Design</span>
                                </div>
                            </div>
                        </div>

                        {/* Learn More Button */}
                        <div className='font-bold text-2xl sm:text-3xl md:text-4xl flex  md:gap-3 gap-2 cursor-pointer hover:text-primary transition-colors'>
                            Learn More
                            <p className='mt-1'>
                                <FaArrowRight size={35} className="bg-black p-2 rounded-full text-primary" />
                            </p>
                        </div>
                    </div>
                </div>

                {/* Collapsible Content with animation */}
                <motion.div
                    className="collapse-content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className='text-center mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-72 mt-6'>
                        <p className='text-sm sm:text-base md:text-lg mr-0 md:mr-56'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iure eaque ipsum, doloribus ea dicta, porro iste nesciunt, magni officiis molestiae. Architecto unde quibusdam molestias repellendus vero, commodi alias pariatur iusto sapiente harum odit laborum corporis voluptatibus voluptas nesciunt quidem?
                        </p>
                    </div>
                    <div className='flex justify-center items-center mt-6'>
                        <div className='w-full sm:w-11/12 md:w-8/12 lg:w-6/12 h-48 sm:h-64 md:h-80 m-0 md:mr-60'>
                            <img
                                className='w-full h-full object-cover rounded-lg shadow-lg'
                                src="/src/assets/webdevelopment.jpg"
                                alt="Graphics Design"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>


            {/* Service 4 - Digital Marketing */}
            <div className="collapse bg-base-200 border-base-300 px-4 sm:px-6 md:px-10 mt-10 rounded-3xl py-4 mx-auto border transition-transform transform hover:scale-105">
                <input type="checkbox" name="my-accordion-4" />
                <div className="collapse-title font-semibold">
                    <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 justify-between'>
                        {/* Number */}
                        <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl'>04</h1>

                        {/* Title and Tags */}
                        <div className='text-center flex-1'>
                            <div className='font-bold text-2xl sm:text-3xl md:text-4xl'>Digital Marketing</div>
                            <div className='mt-3'>
                                <div className='flex flex-wrap gap-2 justify-center mt-4'>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full md:w-auto'>SEO</span>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full md:w-auto'>PPC Advertising</span>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full md:w-auto'>Content Marketing</span>
                                </div>
                                <div className='flex flex-wrap gap-2 mt-3 justify-center'>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full md:w-auto'>Email Marketing</span>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full md:w-auto'>Social Media Marketing</span>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full md:w-auto'>Conversion Rate Optimization</span>
                                </div>
                            </div>
                        </div>

                        {/* Learn More Button */}
                        <div className='font-bold text-2xl sm:text-3xl md:text-4xl flex  md:gap-3 gap-2 cursor-pointer hover:text-primary transition-colors'>
                            Learn More
                            <p className='mt-1'>
                                <FaArrowRight size={35} className="bg-black p-2 rounded-full text-primary" />
                            </p>
                        </div>
                    </div>
                </div>

                {/* Collapsible Content with animation */}
                <motion.div
                    className="collapse-content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className='text-center mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-72 mt-6'>
                        <p className='text-sm sm:text-base md:text-lg mr-0 md:mr-56'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iure eaque ipsum, doloribus ea dicta, porro iste nesciunt, magni officiis molestiae. Architecto unde quibusdam molestias repellendus vero, commodi alias pariatur iusto sapiente harum odit laborum corporis voluptatibus voluptas nesciunt quidem?
                        </p>
                    </div>
                    <div className='flex justify-center items-center mt-6'>
                        <div className='w-full sm:w-11/12 md:w-8/12 lg:w-6/12 h-48 sm:h-64 md:h-80 m-0 md:mr-60'>
                            <img
                                className='w-full h-full object-cover rounded-lg shadow-lg'
                                src="/src/assets/webdevelopment.jpg"
                                alt="Digital Marketing"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

        </div>
    );
}

export default AllServices;
