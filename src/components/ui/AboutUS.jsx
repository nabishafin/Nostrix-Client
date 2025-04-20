import React from 'react';
import { FaCheck } from 'react-icons/fa';
import img from '../../assets/about_pic.jpg';
import { Link } from 'react-router-dom';
import LearnMoreButton from '../shared/LearnMoreButton';

const AboutUS = () => {
    return (
        <section className="py-10 bg-black mt-16 text-white">
            <div className="md:w-10/12 px-4 md:px-0 mx-auto flex flex-col md:flex-row py-10 gap-6 items-center justify-center">
                {/* Image Section */}
                <div className="w-full md:w-6/12 border-2 border-black overflow-hidden">
                    <div className="w-full h-full">
                        <img
                            src={img}
                            className="w-full h-full object-cover object-center"
                            alt="About Us"
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-6/12 pr-0 md:pl-10">
                    <div className="flex items-center gap-2">
                        <hr className="w-6 h-1 bg-primary border-0" />
                        <h1 className="text-white font-semibold text-xl">About Us</h1>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mt-2">
                        Crafting <span className="text-primary">Digital Experiences</span>
                    </h1>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mt-2">
                        That Make an Impact
                    </h1>
                    <p className="mt-5 text-base md:text-lg pr-0 md:pr-10">
                        We’re a team of creative minds and problem solvers who love turning ideas into powerful digital products. Whether it’s building a brand or developing a platform, we bring fresh perspectives and bold energy to everything we do.
                    </p>

                    <div className="mt-5">
                        <div className="flex items-center gap-2">
                            <p className="p-[5px] bg-primary rounded-full text-black"><FaCheck /></p>
                            <p className="text-xl">Creative & Passionate Team</p>
                        </div>
                        <div className="flex items-center gap-2 my-2">
                            <p className="p-[5px] bg-primary rounded-full text-black"><FaCheck /></p>
                            <p className="text-xl">Driven by Innovation</p>
                        </div>
                        <div className="flex items-center gap-2 text-black">
                            <p className="p-[5px] bg-primary rounded-full"><FaCheck /></p>
                            <p className="text-xl text-white">Focused on Real Results</p>
                        </div>
                    </div>

                    <div className="flex gap-16 text-black mt-5 items-center">
                        <Link to={'/aboutus'}>
                            <LearnMoreButton />
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUS;


