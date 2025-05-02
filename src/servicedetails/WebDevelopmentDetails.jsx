import React from 'react';
import PageBanner from '../components/shared/PageBanner';
import heroimageUrl from '../assets/web-detailsbanner.webp'
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
                        <div
                            className="relative border-2 rounded-lg h-48 md:h-64 lg:h-96 mb-8 flex justify-center items-center bg-center bg-no-repeat"
                            style={{
                                backgroundImage: `url(${heroimageUrl})`,
                                backgroundSize: '',
                            }}
                        >
                        </div>



                        {/* Web Development Overview */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Web Development Services</h2>
                            <div className="flex items-center mb-4">
                                <div className="w-6 h-6 rounded-full bg-green-500 mr-2 flex justify-center items-center text-white text-xs">W</div>
                                <p className="text-gray-600 text-sm">
                                    We provide full-stack web development services that help businesses establish a strong digital presence. From stunning landing pages to complex web applications, our team builds fast, secure, and responsive websites that deliver results.
                                </p>
                            </div>
                        </div>

                        {/* Services Include Section */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Services Include:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {[
                                    "Custom Website Design",
                                    "Responsive Web Development",
                                    "E-commerce Solutions",
                                    "Content Management Systems (CMS)",
                                    "Frontend Development (React, Vue)",
                                    "Backend Development (Node.js, PHP, Python)",
                                    "API Integration & Development",
                                    "Performance Optimization",
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

                        {/* Image/Video Grid */}
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

                        {/* Our Expertise Heading and Text */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Expertise in Web Development</h3>
                            <p className="text-gray-600 text-sm">
                                Our developers specialize in modern web technologies including React, Next.js, Tailwind CSS, and Node.js. We follow best practices in UI/UX design, write clean scalable code, and ensure every website we build is SEO-friendly, mobile-optimized, and user-centric.
                            </p>
                        </div>

                        {/* Expertise Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            {[
                                { num: "01", title: "Frontend Development", desc: "Crafting interactive and modern interfaces using React and Tailwind CSS." },
                                { num: "02", title: "Backend Development", desc: "Building powerful server-side logic with Node.js, Express, and databases." },
                                { num: "03", title: "CMS & E-commerce", desc: "Developing websites using WordPress, Shopify, or custom admin dashboards." },
                                { num: "04", title: "Web App Development", desc: "Creating full-featured web applications tailored to your business needs." },
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

                        {/* Services Benefits Section */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Service Benefits:</h3>
                            <ul className="list-none space-y-2">
                                {[
                                    "Enhanced online presence to attract more customers.",
                                    "Mobile-first design for better user experience.",
                                    "SEO-friendly code and structure to rank higher on search engines.",
                                    "Custom features tailored to your business goals.",
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
