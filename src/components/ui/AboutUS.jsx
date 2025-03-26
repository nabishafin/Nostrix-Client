import React from 'react';
import { FaArrowRight, FaCheck } from 'react-icons/fa';


const AboutUS = () => {
    return (
        <section className="py-20 bg-black mt-16 text-white">
            <div className="w-10/12 mx-auto flex flex-col md:flex-row py-10 gap-6">
                {/* Video Section */}
                <div className="w-full md:w-6/12 relative border-2 border-black rounded-3xl mb-10 md:mb-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center">
                        {/* Embed YouTube Video */}
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/RIqg49pEdAo?si=nclRseItac0k89fh"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg"
                        ></iframe>
                    </div>
                    <div className="absolute bottom-0 left-0 w-64 bg-primary p-4 flex items-center border-[10px] border-black rounded-tr-3xl">
                        <div className="text-5xl font-bold text-black mr-2">18</div>
                        <div>
                            <p className="text-3xl font-semibold text-black">Years</p>
                            <p className="text-base text-black">of Experience</p>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-6/12 pr-0 md:pl-10 ">
                    <div className="flex items-center gap-2">
                        <hr className="w-6 h-1 bg-primary border-0" />
                        <h1 className="text-white font-semibold text-xl">Our Services</h1>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mt-2">
                        We’re <span className="text-primary">Awards Winning</span>
                    </h1>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mt-2">
                        Digital Agency
                    </h1>
                    <p className="mt-5 text-base md:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <div className="mt-5">
                        <div className="flex items-center gap-2">
                            <p className="p-[5px] bg-primary rounded-full text-black"><FaCheck /></p>
                            <p className="text-xl">Awards Winning Digital Agency</p>
                        </div>
                        <div className="flex items-center gap-2 my-2">
                            <p className="p-[5px] bg-primary rounded-full text-black"><FaCheck /></p>
                            <p className="text-xl">Experience Team Members</p>
                        </div>
                        <div className="flex items-center gap-2 text-black">
                            <p className="p-[5px] bg-primary rounded-full"><FaCheck /></p>
                            <p className="text-xl text-white">High Quality Services</p>
                        </div>
                    </div>

                    <div className="flex gap-5 text-black mt-5 items-center">
                        <div className="flex gap-2 items-center text-xl text-white pr-2 rounded-3xl bg-white">
                            <p className="text-xl text-white px-3 py-2 rounded-3xl bg-primary">Learn More</p>
                            <p>
                                <FaArrowRight size={40} className="bg-black p-2 rounded-full text-primary" />
                            </p>
                        </div>
                        <div className='text-white hidden md:block '>
                            <p className='text-4xl dancing '>Nabi Shafin</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default AboutUS;