import React from 'react';
import PageBanner from '../components/shared/PageBanner';
import heroimageUrl from '../assets/uiux banner final.png'
import image1 from '../assets/ui-1.png'
import image2 from '../assets/ui-2.png'

const UIUXDesignDetails = () => {
    return (
        <section>
            <div>
                <PageBanner
                    title={'Services'}
                    subtitle={'UI/UX Design Details'}
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
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">UI/UX Design Services</h2>
                            <div className="flex items-center mb-4">
                                <div className="w-6 h-6 rounded-full bg-green-500 mr-2 flex justify-center items-center text-white text-xs">U</div>
                                <p className="text-gray-600 text-sm">
                                    We create intuitive, engaging, and user-centered designs that ensure your product is both beautiful and functional. Our UI/UX process focuses on understanding your users' needs and exceeding their expectations.
                                </p>
                            </div>
                        </div>

                        {/* Services Include section */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Services Include:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {[
                                    "User Research & Analysis",
                                    "Wireframing & Prototyping",
                                    "Visual Interface Design",
                                    "Interaction Design",
                                    "Usability Testing",
                                    "Design Systems",
                                    "Mobile App Design",
                                    "Web Application Design",
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
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Methodology</h3>
                            <p className="text-gray-600 text-sm">
                                Our design team utilizes industry-standard tools like Figma and Adobe XD to craft experiences that resonate. We prioritize accessibility (A11y) and responsive layouts to ensure your product looks great on every device.
                            </p>
                        </div>

                        {/* Feature Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            {[
                                { num: "01", title: "Empathize", desc: "Understanding the personas and finding user pain points." },
                                { num: "02", title: "Ideate", desc: "Exploring creative solutions and sketching early concepts." },
                                { num: "03", title: "Prototyping", desc: "Building high-fidelity mockups and interactive flows." },
                                { num: "04", title: "Testing", desc: "Validating the design with real users and stakeholder feedback." },
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
                                    "Increased user engagement and retention.",
                                    "Optimized conversion funnels.",
                                    "Cohesive brand identity across all platforms.",
                                    "Fast-loading and accessible design components.",
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

export default UIUXDesignDetails;
