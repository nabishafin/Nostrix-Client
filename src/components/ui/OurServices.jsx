import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const OurServices = () => {
    return (
        <div className='mx-auto px-4  md:w-10/12 mt-6 '>
            <div className=" ">
                {/* Section Heading */}
                <div className="flex items-center gap-2">
                    <hr className="w-6 h-1 bg-primary border-0" />
                    <h1 className="text-black font-semibold text-xl">Our Services</h1>
                </div>

                {/* Content Section */}
                <div className="flex flex-col md:flex-row mt-5">
                    {/* Left Side - Headings */}
                    <div className="w-full md:w-6/12 ">
                        <h2 className="text-3xl md:text-5xl font-bold ">Discover Our</h2>
                        <h2 className="text-3xl md:text-5xl font-bold">Digital Solutions</h2>
                    </div>

                    {/* Vertical Divider - Hidden on small screens */}
                    <div className="hidden md:block w-px bg-gradient-to-r from-white via-primary to-white mx-4 my-4 md:my-0"></div>

                    {/* Right Side - Description */}
                    <div className="w-full md:w-6/12 text-center md:text-left px-2 flex justify-center items-center mt-4 md:mt-0">
                        <p className='text-left'>
                            At <span className="text-primary">Nostrix Creative</span>, we specialize in website development, graphics design, UI/UX design, digital marketing, custom software, mobile apps, and branding. We transform ideas into impactful digital experiences to help your business thrive. Let’s create something extraordinary together!
                        </p>
                    </div>
                </div>
            </div>
            {/* Accordion section of Our Service  */}
            {/* part 1 Development */}
            <div className="collapse bg-base-200 border border-base-300 px-4 sm:px-6 md:px-10 mt-10 rounded-3xl py-4">
                <input type="checkbox" name="my-accordion-1" />
                <div className="collapse-title font-semibold">
                    <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 justify-between'>
                        {/* Number */}
                        <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl'>01</h1>

                        {/* Title and Tags */}
                        <div className='text-center flex-1'>
                            <div className='font-bold text-2xl sm:text-3xl md:text-4xl'>Website Development</div>
                            <div className='mt-3'>
                                <div className='flex flex-wrap gap-2 justify-center'>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black'>React JS Development</span>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black'>Next js Development</span>
                                </div>
                                <div className='flex flex-wrap gap-2 mt-3 justify-center'>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black'>Tailwind Css</span>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black'>Mongo DB</span>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black'>Node js</span>
                                </div>
                            </div>
                        </div>

                        {/* Learn More Button */}
                        <div className='font-bold text-2xl sm:text-3xl md:text-4xl flex md:gap-3 gap-2 cursor-pointer hover:text-primary transition-colors'>
                            Learn More
                            <p className='mt-[6px] md:mt-[4px]'><FaArrowRight className='bg-black md:p-2 rounded-full text-primary' /></p>
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
                                <div className='flex flex-wrap gap-2 justify-center'>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black'>User Research</span>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black'>User Personas</span>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black'>Usability Testing</span>
                                </div>
                                <div className='flex flex-wrap gap-2 mt-3 justify-center'>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black'>Wireframing</span>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black'>Prototyping</span>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black'>Digital Design</span>
                                </div>
                            </div>
                        </div>

                        {/* Learn More Button */}
                        <div className='font-bold text-2xl sm:text-3xl md:text-4xl flex md:gap-3 gap-2 cursor-pointer hover:text-primary transition-colors'>
                            Learn More
                            <p className='mt-[6px] md:mt-[4px]'><FaArrowRight className='bg-black md:p-2 rounded-full text-primary' /></p>
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
                        <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl'>02</h1>

                        {/* Title and Tags */}
                        <div className='text-center flex-1'>
                            <div className='font-bold text-2xl sm:text-3xl md:text-4xl'>UX/UI Design</div>
                            <div className='mt-3'>
                                <div className='flex flex-wrap gap-2 justify-center'>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black'>User Research</span>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black'>User Personas</span>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black'>Usability Testing</span>
                                </div>
                                <div className='flex flex-wrap gap-2 mt-3 justify-center'>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black'>Wireframing</span>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black'>Prototyping</span>
                                    <span className='p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black'>Digital Design</span>
                                </div>
                            </div>
                        </div>

                        {/* Learn More Button */}
                        <div className='font-bold text-2xl sm:text-3xl md:text-4xl flex md:gap-3 gap-2 cursor-pointer hover:text-primary transition-colors'>
                            Learn More
                            <p className='mt-[6px] md:mt-[4px]'><FaArrowRight className='bg-black md:p-2 rounded-full text-primary' /></p>
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

export default OurServices;