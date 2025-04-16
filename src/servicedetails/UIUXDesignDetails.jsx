import React from 'react';
import PageBanner from '../components/shared/PageBanner';

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
                        <div className="relative rounded-lg bg-gray-200 h-48 md:h-64 lg:h-80 mb-8 flex justify-center items-center">
                            <div className="absolute inset-0 flex justify-center items-center">
                                <div className="w-10 h-10 rounded-full bg-gray-400 flex justify-center items-center text-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                        <path d="M12 1.75a10.25 10.25 0 1 0 10.25 10.25A10.262 10.262 0 0 0 12 1.75Zm0 18.5a8.25 8.25 0 1 1 8.25-8.25 8.259 8.259 0 0 1-8.25 8.25Zm0-13a.75.75 0 0 0-.75.75v5.25a.75.75 0 0 0 .53.71l3 1a.75.75 0 0 0 .44-1.42L12.75 13V8A.75.75 0 0 0 12 7.25Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* UI/UX Design Overview */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">UI/UX Design Services</h2>
                            <div className="flex items-center mb-4">
                                <div className="w-6 h-6 rounded-full bg-green-500 mr-2 flex justify-center items-center text-white text-xs">U</div>
                                <p className="text-gray-600 text-sm">
                                    We craft intuitive and user-centered digital experiences that align with business goals. From wireframes to full interactive prototypes, we focus on usability, accessibility, and aesthetics.
                                </p>
                            </div>
                        </div>

                        {/* Services Include Section */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Services Include:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {[
                                    "User Research & Analysis",
                                    "Wireframing & Prototyping",
                                    "UI Design with Design Systems",
                                    "Mobile & Web App Design",
                                    "UX Audit & Heuristic Evaluation",
                                    "User Flow & Journey Mapping",
                                    "Interaction Design",
                                    "Accessibility Design",
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center text-gray-700">
                                        <svg className="w-5 h-5 bg-primary p-[1px] rounded-full text-black mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Image/Video Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            <div className="rounded-lg bg-gray-200 h-48 md:h-64"></div>
                            <div className="rounded-lg bg-gray-200 h-48 md:h-64"></div>
                        </div>

                        {/* Our Expertise Heading and Text */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Expertise in UI/UX Design</h3>
                            <p className="text-gray-600 text-sm">
                                Our design team uses tools like Figma, Adobe XD, and Sketch to deliver modern, intuitive, and pixel-perfect designs. We follow human-centered design principles, ensuring every interface is user-friendly, accessible, and aligned with your brand.
                            </p>
                        </div>

                        {/* Expertise Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            {[
                                { num: "01", title: "User Research", desc: "Understanding user behavior and needs through interviews, surveys, and analytics." },
                                { num: "02", title: "Wireframing", desc: "Creating low-fidelity mockups to outline structure and content layout." },
                                { num: "03", title: "Visual Design", desc: "Designing polished, branded interfaces with strong visual hierarchy." },
                                { num: "04", title: "Prototyping", desc: "Building interactive prototypes to validate UX before development." },
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
                                    "Improved user satisfaction and engagement.",
                                    "Mobile-friendly and accessible design.",
                                    "Faster development with ready design systems.",
                                    "Stronger brand identity through cohesive UI.",
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
