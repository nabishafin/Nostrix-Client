import React from 'react';
import PageBanner from '../components/shared/PageBanner';

const GraphicsDesignDetails = () => {
    return (
        <section>
            <div>
                <PageBanner
                    title={'Services'}
                    subtitle={'Graphics Design Details'}
                ></PageBanner>
            </div>
            <div className='px-4 md:px-0 w-full md:w-10/12 mx-auto mt-20'>
                <div>
                    {/* Hero Section */}
                    <div className="relative rounded-lg bg-gray-200 h-48 md:h-64 lg:h-80 mb-8 flex justify-center items-center">
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="w-10 h-10 rounded-full bg-gray-400 flex justify-center items-center text-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                    <path d="M2 6a2 2 0 012-2h6v2H4v12h16v-6h2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm14 0a2 2 0 012-2h4v4a2 2 0 01-2 2h-4V6zm2 0v2h2V6h-2zM8 12a2 2 0 110-4 2 2 0 010 4z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Overview */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Graphics Design Services</h2>
                        <div className="flex items-center mb-4">
                            <div className="w-6 h-6 rounded-full bg-green-500 mr-2 flex justify-center items-center text-white text-xs">G</div>
                            <p className="text-gray-600 text-sm">
                                We offer creative graphic design solutions that help brands stand out visually. From logos to social media creatives, our designs are impactful, consistent, and tailored to your identity.
                            </p>
                        </div>
                    </div>

                    {/* Services Include */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Services Include:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                "Logo Design & Branding",
                                "Business Cards & Stationery",
                                "Brochures & Flyers",
                                "Social Media Graphics",
                                "Poster & Banner Design",
                                "Infographics",
                                "Packaging Design",
                                "Illustrations",
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

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <div className="rounded-lg bg-gray-200 h-48 md:h-64"></div>
                        <div className="rounded-lg bg-gray-200 h-48 md:h-64"></div>
                    </div>

                    {/* Expertise Section */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Expertise in Graphics Design</h3>
                        <p className="text-gray-600 text-sm">
                            Our graphic designers use tools like Adobe Illustrator, Photoshop, and Figma to create visually stunning designs. We ensure consistency, creativity, and clarity in every visual asset.
                        </p>
                    </div>

                    {/* Expertise Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { num: "01", title: "Brand Identity", desc: "Building consistent, professional branding across all channels." },
                            { num: "02", title: "Print Design", desc: "Designing impactful flyers, brochures, posters, and more." },
                            { num: "03", title: "Digital Graphics", desc: "Creating web and social media graphics optimized for engagement." },
                            { num: "04", title: "Custom Illustration", desc: "Unique illustrations for storytelling and visual enhancement." },
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

                    {/* Benefits */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Service Benefits:</h3>
                        <ul className="list-none space-y-2">
                            {[
                                "Enhanced brand recognition with professional visuals.",
                                "Stronger marketing through impactful design.",
                                "Custom assets tailored to your audience.",
                                "Consistent visual identity across all platforms.",
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
        </section>
    );
};

export default GraphicsDesignDetails;
