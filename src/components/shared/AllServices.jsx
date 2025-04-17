import React from 'react';
import ButtonPrimary from './ButtonPrimary';
import { Link } from 'react-router-dom';
import webImg from '../../assets/banner-one.jpg'
import uiImg from '../../assets/blackwebpage demo.webp'
import digitalImg from '../../assets/digital-marketing.png'
import graphicsImg from '../../assets/graphics-01.jpg'


const AllServices = () => {
    return (
        <div>
            {/* Service 1 - Website Development */}
            <div className="collapse bg-base-200 border-base-300 sm:px-4 mt-10 rounded-2xl py-4 mx-auto border">
                <input type="checkbox" name="my-accordion-1" />
                <div className="collapse-title font-semibold">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 justify-between">
                        {/* Number */}
                        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">01</h1>

                        {/* Title and Tags */}
                        <div className="text-left flex-1 sm:ml-4 md:ml-10 lg:ml-16 xl:ml-80">
                            <div className="font-bold text-2xl sm:text-3xl md:text-4xl ml-2">
                                Website Development
                            </div>
                            <div className="mt-3">
                                <div className="flex flex-wrap gap-2 mt-4">
                                    <span className="p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full sm:w-auto">
                                        React JS Development
                                    </span>
                                    <span className="p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full sm:w-auto">
                                        Angular JS Development
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    <span className="p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full sm:w-auto">
                                        Laravel Development
                                    </span>
                                    <span className="p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full sm:w-auto">
                                        Vue JS Development
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Learn More Button */}
                        <Link to="/services/web" className="z-10">
                            <ButtonPrimary text={"Learn More"} />
                        </Link>
                    </div>
                </div>

                {/* Collapsible Content */}
                <div className="collapse-content">
                    <div className="sm:mx-8 md:mx-16 lg:mx-32 xl:mx-72 mt-6">
                        <p className="text-sm sm:text-base md:text-lg md:ml-[123px]">
                            Our web development service combines cutting-edge technologies with creative design to deliver fast, secure, and scalable websites. Whether you're building a single-page app or a full-stack solution, we ensure every project is optimized for performance, SEO, and user experience.
                        </p>
                    </div>
                    <div className="flex justify-center mt-6">
                        <div className="w-full md:w-8/12 lg:w-5/12 h-48 sm:h-64 md:h-80 m-0 md:mr-12 mr-0">
                            <img
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                                src={webImg}
                                alt="Web Development"
                            />
                        </div>
                    </div>
                </div>
            </div>


            {/* Service 2 - UX/UI Design */}
            <div className="collapse bg-base-200 border-base-300 sm:px-4 mt-10 rounded-2xl py-4 mx-auto border">
                <input type="checkbox" name="my-accordion-1" />
                <div className="collapse-title font-semibold">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 justify-between">
                        {/* Number */}
                        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">02</h1>

                        {/* Title and Tags */}
                        <div className="text-left flex-1 sm:ml-4 md:ml-10 lg:ml-16 xl:ml-80">
                            <div className="font-bold text-2xl sm:text-3xl md:text-4xl ml-2">
                                UX/UI Design
                            </div>
                            <div className="mt-3">
                                <div className="flex flex-wrap gap-2 mt-4">
                                    <span className="p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full sm:w-auto">
                                        User Research
                                    </span>
                                    <span className="p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full sm:w-auto">
                                        User Personas
                                    </span>
                                    <span className="p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full sm:w-auto">
                                        Usability Testing
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    <span className="p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full sm:w-auto">
                                        Wireframing
                                    </span>
                                    <span className="p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full sm:w-auto">
                                        Prototyping
                                    </span>
                                    <span className="p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full sm:w-auto">
                                        Visual Design
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Learn More Button */}
                        <Link to={'/services/uiux'} className="z-10">
                            <ButtonPrimary text={"Learn More"} />
                        </Link>
                    </div>
                </div>

                {/* Collapsible Content */}
                <div className="collapse-content">
                    <div className="sm:mx-8 md:mx-16 lg:mx-32 xl:mx-72 mt-6">
                        <p className="text-sm sm:text-base md:text-lg md:ml-[123px]">
                            We craft intuitive and aesthetically pleasing interfaces that enhance user satisfaction and engagement. Our UX/UI design process is rooted in deep user research and usability testing, ensuring your product is not only beautiful but also user-friendly and accessible across devices.
                        </p>
                    </div>
                    <div className="flex justify-center mt-6">
                        <div className="w-full md:w-8/12 lg:w-5/12 h-48 sm:h-64 md:h-80 m-0 md:mr-12 mr-0">
                            <img
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                                src={uiImg}
                                alt="UX UI Design"
                            />
                        </div>
                    </div>
                </div>
            </div>


            {/* Service 3 - Graphics Design */}
            <div className="collapse bg-base-200  border-base-300  sm:px-4 mt-10 rounded-2xl py-4 mx-auto border">
                <input type="checkbox" name="my-accordion-1" />
                <div className="collapse-title font-semibold">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 justify-between ">
                        {/* Number */}
                        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">03</h1>
                        {/* Title and Tags */}
                        <div className="text-left flex-1 sm:ml-4 md:ml-10 lg:ml-16 xl:ml-80">
                            <div className="font-bold text-2xl sm:text-3xl md:text-4xl ml-2">
                                Graphics Design
                            </div>
                            <div className="mt-3">
                                <div className="flex flex-wrap gap-2 mt-4">
                                    <span className="p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full sm:w-auto">
                                        Packaging Design
                                    </span>
                                    <span className="p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full sm:w-auto">
                                        Infographic Design
                                    </span>
                                    <span className="p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full sm:w-auto">
                                        Illustration
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    <span className="p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full sm:w-auto">
                                        Brand Identity Design
                                    </span>
                                    <span className="p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full sm:w-auto">
                                        Print Design
                                    </span>
                                    <span className="p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full sm:w-auto">
                                        Digital Design
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Learn More Button */}
                        <Link to={'/services/graphics'} className="z-10" >
                            <ButtonPrimary text={"Learn More"} />
                        </Link>
                    </div>
                </div>
                {/* Collapsible Content */}
                <div className="collapse-content">
                    <div className=" sm:mx-8 md:mx-16 lg:mx-32 xl:mx-72 mt-6">
                        <p className="text-sm sm:text-base md:text-lg  md:ml-[123px]">
                            Our Graphics Design service brings your ideas to life through visually captivating designs that resonate with your audience. From striking packaging and engaging infographics to unique illustrations and brand identities, we ensure every detail reflects your vision and goals. Whether for digital or print media, our creative solutions are tailored to enhance your brand presence.
                        </p>
                    </div>
                    <div className="flex justify-center mt-6">
                        <div className="w-full  md:w-8/12 lg:w-5/12 h-48 sm:h-64 md:h-80 m-0 md:mr-12 mr-0">
                            <img
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                                src={graphicsImg}
                                alt="Web Development"
                            />
                        </div>
                    </div>
                </div>
            </div>


            {/* Service 4 - Digital Marketing */}
            <div className="collapse bg-base-200  border-base-300  sm:px-4 mt-10 rounded-2xl py-4 mx-auto border">
                <input type="checkbox" name="my-accordion-1" />
                <div className="collapse-title font-semibold">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 justify-between ">
                        {/* Number */}
                        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">04</h1>
                        {/* Title and Tags */}
                        <div className="text-left flex-1 sm:ml-4 md:ml-10 lg:ml-16 xl:ml-80">
                            <div className="font-bold text-2xl sm:text-3xl md:text-4xl ml-2">
                                Digital Marketing
                            </div>
                            <div className="mt-3">
                                <div className="flex flex-wrap gap-2 mt-4">
                                    <span className="p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full sm:w-auto">
                                        Search Engine Optimization
                                    </span>
                                    <span className="p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full sm:w-auto">
                                        Search Engine Marketing
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    <span className="p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full sm:w-auto">
                                        Social Media Marketing
                                    </span>
                                    <span className="p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full sm:w-auto">
                                        Email Marketing
                                    </span>
                                    <span className="p-2 border-l-2 border-r-2 text-center rounded-3xl backdrop-blur-3xl opacity-70 shadow-lg bg-white px-4 text-black w-full sm:w-auto">
                                        Affiliate Marketing
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Learn More Button */}
                        <Link to={'/services/digital'} className="z-10" >
                            <ButtonPrimary text={"Learn More"} />
                        </Link>
                    </div>
                </div>
                {/* Collapsible Content */}
                <div className="collapse-content">
                    <div className=" sm:mx-8 md:mx-16 lg:mx-32 xl:mx-72 mt-6">
                        <p className="text-sm sm:text-base md:text-lg  md:ml-[123px]">
                            Our Digital Marketing service helps your business grow online through strategic planning and targeted campaigns. From improving your search engine visibility to running effective ads and engaging content on social media, we cover every digital touchpoint. We craft personalized marketing solutions that drive traffic, generate leads, and increase your brand’s online presence.
                        </p>
                    </div>
                    <div className="flex justify-center mt-6">
                        <div className="w-full  md:w-8/12 lg:w-5/12 h-48 sm:h-64 md:h-80 m-0 md:mr-12 mr-0">
                            <img
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                                src={digitalImg}
                                alt="Web Development"
                            />
                        </div>
                    </div>
                </div>
            </div>


        </div >
    );
}

export default AllServices;
