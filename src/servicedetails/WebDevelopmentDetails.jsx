import React from 'react';
import PageBanner from '../components/shared/PageBanner';
import heroimageUrl from '../assets/web_cover.jpeg'
import image1 from '../assets/Frontend-details-image.jpeg'
import image2 from '../assets/backend details img.jpg'

const WebDevelopmentDetails = () => {
    return (
        <section>
            <div>
                <PageBanner
                    title={'Services'}
                    subtitle={'Web Development Details'}
                ></PageBanner>
            </div>
            <div className='px-4 md:px-0 w-full md:w-10/12 mx-auto mt-20 '>
                <div className="">
                    <div className="">
                        {/* Hero Section */}
                        <div className="relative border-2 rounded-lg h-48 md:h-64 lg:h-[600px] mb-8">
                            <div
                                className="absolute inset-0 bg-black opacity-40 rounded-lg z-10"
                            ></div>
                            <div
                                className="relative z-20 flex justify-center items-center h-full bg-center bg-no-repeat bg-cover rounded-lg"
                                style={{
                                    backgroundImage: `url(${heroimageUrl})`,
                                }}
                            >
                            </div>
                        </div>

                        {/* Overview */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Web Development Services</h2>
                            <div className="flex items-center mb-4">
                                <div className="w-6 h-6 rounded-full bg-green-500 mr-2 flex justify-center items-center text-white text-xs">W</div>
                                <p className="text-gray-600 text-sm">
                                    We specialize in building robust, scalable, and high-performance web applications using the latest technologies. Our team ensures that your site is fast, secure, and user-friendly.
                                </p>
                            </div>
                        </div>

                        {/* Services Include section */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Services Include:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {[
                                    "Custom Web App Development",
                                    "E-commerce Website Solutions",
                                    "Content Management Systems (CMS)",
                                    "Progressive Web Apps (PWA)",
                                    "API Integration & Development",
                                    "Website Maintenance & Support",
                                    "Performance Optimization",
                                    "Responsive Web Design",
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center text-gray-700">
                                        <svg className="w-5 h-5 bg-primary p-[1px] rounded-full  text-black mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Img Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            <div
                                className="rounded-lg bg-contain bg-no-repeat bg-center h-48 md:h-64"
                                style={{ backgroundImage: `url(${image1})` }}
                            ></div>
                            <div
                                className="rounded-lg bg-contain bg-no-repeat bg-center h-48 md:h-64"
                                style={{ backgroundImage: `url(${image2})` }}
                            ></div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Technology Stack</h3>
                            <p className="text-gray-600 text-sm">
                                We utilize modern frameworks and libraries such as React, Node.js, and MongoDB to build dynamic and responsive websites that meet your business goals.
                            </p>
                        </div>

                        {/* Feature Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            {[
                                { num: "01", title: "Scalable", desc: "Build for growth with our scalable web solutions." },
                                { num: "02", title: "Secure", desc: "Keep your data safe with our robust security features." },
                                { num: "03", title: "Responsive", desc: "Reach your audience on any device with responsive design." },
                                { num: "04", title: "Performant", desc: "Ensure your site loads fast with optimized performance." },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white rounded-md shadow-md p-4">
                                    <div className="bg-green-100 text-green-500 rounded-full w-8 h-8 flex items-center justify-center mb-2">
                                        <span className="text-xs font-semibold">{item.num}</span>
                                    </div>
                                    <h4 className="text-sm font-semibold text-gray-800 mb-1">{item.title}</h4>
                                    <p className="text-gray-600 text-xs">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Benefits:</h3>
                            <ul className="list-none space-y-2">
                                {[
                                    "Increased online presence and brand visibility.",
                                    "Improved user experience and customer engagement.",
                                    "Higher conversion rates and business growth.",
                                    "Secure and reliable website performance.",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-700 text-sm">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebDevelopmentDetails;
