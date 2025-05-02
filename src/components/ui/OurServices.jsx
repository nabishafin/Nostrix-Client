import React from 'react';
import AllServices from '../shared/AllServices';

const OurServices = () => {
    return (
        <div className='mx-auto px-4 md:px-0  md:w-10/12 mt-6  '>
            <div className=" ">
                {/* Section Heading */}
                <div className="flex items-center gap-2">
                    <hr className="w-6 h-1 bg-primary border-0" />
                    <h1 className="text-black font-semibold text-xl">Our Services</h1>
                </div>


                <div className="flex flex-col md:flex-row mt-5">

                    <div className="w-full md:w-6/12 ">
                        <h2 className="text-3xl md:text-5xl font-bold ">Discover Our</h2>
                        <h2 className="text-3xl md:text-5xl font-bold">Digital Solutions</h2>
                    </div>

                    <div className="hidden md:block w-px bg-gradient-to-r from-white via-primary to-white mx-4 my-4 md:my-0"></div>


                    <div className="w-full md:w-6/12 text-center md:text-left px-2 flex justify-center items-center mt-4 md:mt-0">
                        <p className='text-left'>
                            At <span className="text-primary">Nostrix Creative</span>, we specialize in website development, graphics design, UI/UX design, digital marketing, custom software, mobile apps, and branding. We transform ideas into impactful digital experiences to help your business thrive. Let’s create something extraordinary together!
                        </p>
                    </div>
                </div>
            </div>

            <AllServices />
        </div>
    );
};

export default OurServices;