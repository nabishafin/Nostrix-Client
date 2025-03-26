import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const AllServices = () => {
    return (
        <div>
            <div className="collapse bg-base-200  border-base-300 px-4 sm:px-6 md:px-10 mt-10 rounded-3xl py-4 mx-auto border">
                <input type="checkbox" name="my-accordion-1" />
                <div className="collapse-title  font-semibold  ">
                    <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 justify-between '>
                        {/* Number */}
                        <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl'>01</h1>

                        {/* Title and Tags */}
                        <div className='text-center flex-1  sm:w-full'>
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
                        <div className='font-bold text-2xl sm:text-3xl md:text-4xl flex md:gap-3 gap-2 cursor-pointer hover:text-primary transition-colors'>
                            Learn More
                            <p className='mt-[6px] md:mt-[7px]'><FaArrowRight className='bg-black md:p-2 rounded-full text-primary' /></p>
                        </div>
                    </div>
                </div>

                {/* Collapsible Content */}
                <div className="collapse-content">
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
                </div>
            </div>


            {/* part-2 Ui Ux */}
            <div className="collapse bg-base-200 border border-base-300 px-4 sm:px-6 md:px-10 mt-10 rounded-3xl py-4">
                <input type="checkbox" name="my-accordion-1" />
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
                        <div className='font-bold text-2xl sm:text-3xl md:text-4xl flex md:gap-3 gap-2 cursor-pointer hover:text-primary transition-colors'>
                            Learn More
                            <p className='mt-[6px] md:mt-[7px]'><FaArrowRight className='bg-black md:p-2 rounded-full text-primary' /></p>
                        </div>
                    </div>
                </div>

                {/* Collapsible Content */}
                <div className="collapse-content">
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
                </div>
            </div>


            {/* Part-3 Graphics */}
            <div className="collapse bg-base-200 border border-base-300 px-4 sm:px-6 md:px-10 mt-10 rounded-3xl py-4">
                <input type="checkbox" name="my-accordion-1" />
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
                        <div className='font-bold text-2xl sm:text-3xl md:text-4xl flex md:gap-3 gap-2 cursor-pointer hover:text-primary transition-colors'>
                            Learn More
                            <p className='mt-[6px] md:mt-[7px]'><FaArrowRight className='bg-black md:p-2 rounded-full text-primary' /></p>
                        </div>
                    </div>
                </div>

                {/* Collapsible Content */}
                <div className="collapse-content">
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
                </div>
            </div>

            {/* Digital Marketing */}
            <div className="collapse bg-base-200 border border-base-300 px-4 sm:px-6 md:px-10 mt-10 rounded-3xl py-4">
                <input type="checkbox" name="my-accordion-1" />
                <div className="collapse-title font-semibold">
                    <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 justify-between'>
                        {/* Number */}
                        <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl'>04</h1>

                        {/* Title and Tags */}
                        <div className='text-center flex-1'>
                            <div className='font-bold text-2xl sm:text-3xl md:text-4xl'>Digital Marketing</div>
                            <div className='mt-3'>
                                <div className='flex flex-wrap gap-2 justify-center mt-4'>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full md:w-auto'>Search Engine Optimization</span>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full md:w-auto'>Email Marketing</span>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full md:w-auto'>Email Marketing</span>

                                </div>
                                <div className='flex flex-wrap gap-2 mt-3 justify-center'>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full md:w-auto'>Social Media Marketing</span>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full md:w-auto'>Affiliate Marketing</span>
                                </div>
                            </div>
                        </div>

                        {/* Learn More Button */}
                        <div className='font-bold text-2xl sm:text-3xl md:text-4xl flex md:gap-3 gap-2 cursor-pointer hover:text-primary transition-colors'>
                            Learn More
                            <p className='mt-[6px] md:mt-[7px]'><FaArrowRight className='bg-black md:p-2 rounded-full text-primary' /></p>
                        </div>
                    </div>
                </div>

                {/* Collapsible Content */}
                <div className="collapse-content">
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
                </div>
            </div>
        </div>
    );
};

export default AllServices;