import React from 'react';
import PageBanner from '../../components/shared/PageBanner';
import { FaArrowRight, FaCheck, FaFacebook, FaInstagram, FaInstagramSquare, FaPinterest, FaTwitter } from 'react-icons/fa';
import img from '../../assets/bp.jpg';
import WorkProcess from '../../components/ui/WorkProcess';
import Marque from '../../components/shared/Marque';

const AboutPage = () => {


    return (
        <div>
            <PageBanner title={'About Us'} subtitle={'About Us'} />
            {/* ........................ */}
            <section className="py-10 mt-16 text-black">
                <div className="md:w-10/12 px-4 md:px-0 mx-auto flex flex-col md:flex-row py-10 gap-6 items-center justify-center">
                    {/* Image Section */}
                    <div className="w-full md:w-6/12 border-2 border-black overflow-hidden">
                        <div className="w-full h-96 md:h-full">
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
                            <h1 className="text-black font-semibold text-xl">About Us</h1>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-black mt-2">
                            We’re <span className="text-primary">Awards Winning</span>
                        </h1>
                        <h1 className="text-3xl md:text-5xl font-bold text-black mt-2">
                            Digital Agency
                        </h1>
                        <p className="mt-5 text-base md:text-lg pr-0 md:pr-10">
                            We proudly introduce ourselves as an award-winning digital agency with a passion for delivering top-quality services. Our team is made up of talented professionals who are experts in their fields. Want to learn more about what we do? Click the "Learn More" button to get all the details!
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
                                <p className="text-xl text-black">High Quality Services</p>
                            </div>
                        </div>

                        <div className="flex gap-16 text-black mt-5 items-center">
                            <div className="flex gap-2 items-center text-xl text-white pr-2 rounded-3xl bg-white">
                                <p className="text-xl text-white px-3 py-2 rounded-3xl bg-primary">Learn More</p>
                                <p>
                                    <FaArrowRight size={40} className="bg-black p-2 rounded-full text-primary" />
                                </p>
                            </div>
                            <div className="text-white hidden md:block">
                                <p className="text-4xl dancing">Nabi Shafin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ..................... */}
            <WorkProcess />
            {/* .......................... */}
            <div>
                <Marque />
            </div>
            {/* Team Member container */}
            <section className="bg-black p-4 md:p-0 mb-64" >
                <div className="w-full md:w-10/12 mx-auto py-12 md:py-20">
                    <div className="flex items-center gap-2">
                        <hr className="w-6 h-1 bg-primary border-0" />
                        <h1 className="text-white font-semibold text-lg md:text-xl">Team Member</h1>
                    </div>
                    <h1 className="text-2xl md:text-3xl mt-1 text-white font-bold">Meet Our</h1>
                    <div className="flex justify-between items-center mt-6">
                        <p className="text-3xl md:text-5xl font-bold text-primary">Meet Our Professionals Team</p>
                        {/* The button is hidden on mobile and shown on medium screens and up */}
                        <div className="hidden md:flex gap-2 items-center text-lg md:text-xl mt-1 text-white pr-2 rounded-3xl bg-white">
                            <p className="text-lg md:text-xl text-white px-3 py-2 rounded-3xl bg-primary">Learn More</p>
                            <p>
                                <FaArrowRight size={30} className="bg-black p-2 rounded-full text-primary" />
                            </p>
                        </div>
                    </div>
                    {/* Card section */}
                    <div className=' grid grid-cols-1 md:grid-cols-3 gap-4 mt-10'>
                        {/* card-1 */}
                        <div className="flex flex-col items-center justify-center ">
                            <div className="relative w-full   rounded-lg shadow-lg overflow-hidden mx-auto">
                                <div className="relative h-64 md:h-80">
                                    <img src={img} alt="Card Image" className="w-full h-full object-cover" />
                                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center space-x-4">
                                        <div className="bg-primary rounded-full p-2">
                                            <FaFacebook size={30} className="text-black" />
                                        </div>
                                        <div className="bg-primary rounded-full p-2">
                                            <FaTwitter size={30} className="text-black" />
                                        </div>
                                        <div className="bg-primary rounded-full p-2">
                                            <FaPinterest size={30} className="text-black" />
                                        </div>
                                        <div className="bg-primary rounded-full p-2">
                                            <FaInstagramSquare size={30} className="text-black" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 text-center w-full max-w-sm md:max-w-md lg:max-w-lg">
                                <h1 className="text-white text-xl font-semibold">Jenny Alexander</h1>
                                <h3 className="text-white text-md">[ CEO, Digital Agency ]</h3>
                            </div>
                        </div>
                        {/* card-2 */}
                        <div className="flex flex-col items-center justify-center ">
                            <div className="relative w-full   rounded-lg shadow-lg overflow-hidden mx-auto">
                                <div className="relative h-64 md:h-80">
                                    <img src={img} alt="Card Image" className="w-full h-full object-cover" />
                                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center space-x-4">
                                        <div className="bg-primary rounded-full p-2">
                                            <FaFacebook size={30} className="text-black" />
                                        </div>
                                        <div className="bg-primary rounded-full p-2">
                                            <FaTwitter size={30} className="text-black" />
                                        </div>
                                        <div className="bg-primary rounded-full p-2">
                                            <FaPinterest size={30} className="text-black" />
                                        </div>
                                        <div className="bg-primary rounded-full p-2">
                                            <FaInstagramSquare size={30} className="text-black" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 text-center w-full max-w-sm md:max-w-md lg:max-w-lg">
                                <h1 className="text-white text-xl font-semibold">Jenny Alexander</h1>
                                <h3 className="text-white text-md">[ CEO, Digital Agency ]</h3>
                            </div>
                        </div>
                        {/* card-3 */}
                        <div className="flex flex-col items-center justify-center ">
                            <div className="relative w-full   rounded-lg shadow-lg overflow-hidden mx-auto">
                                <div className="relative h-64 md:h-80">
                                    <img src={img} alt="Card Image" className="w-full h-full object-cover" />
                                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center space-x-4">
                                        <div className="bg-primary rounded-full p-2">
                                            <FaFacebook size={30} className="text-black" />
                                        </div>
                                        <div className="bg-primary rounded-full p-2">
                                            <FaTwitter size={30} className="text-black" />
                                        </div>
                                        <div className="bg-primary rounded-full p-2">
                                            <FaPinterest size={30} className="text-black" />
                                        </div>
                                        <div className="bg-primary rounded-full p-2">
                                            <FaInstagramSquare size={30} className="text-black" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 text-center w-full max-w-sm md:max-w-md lg:max-w-lg">
                                <h1 className="text-white text-xl font-semibold">Jenny Alexander</h1>
                                <h3 className="text-white text-md">[ CEO, Digital Agency ]</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;