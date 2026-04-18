import React from 'react';
import PageBanner from '../components/shared/PageBanner';
import heroimageUrl from '../assets/gd-banner.png'
import image1 from '../assets/gd-1.avif'
import image2 from '../assets/gd-2.jpg'

const GraphicsDesignDetails = () => {
    return (
        <section>
            <div>
                <PageBanner
                    title={'Services'}
                    subtitle={'Graphics Design Details'}
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
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Graphics Design Services</h2>
                            <div className="flex items-center mb-4">
                                <div className="w-6 h-6 rounded-full bg-green-500 mr-2 flex justify-center items-center text-white text-xs">G</div>
                                <p className="text-gray-600 text-sm">
                                    We provide exceptional graphic design services that help brands communicate visually. From logos to marketing materials, we bring your vision to life with stunning artwork.
                                </p>
                            </div>
                        </div>

                        {/* Services include */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Services Include:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {[
                                    "Logo & Branding Design",
                                    "Marketing Collateral",
                                    "Social Media Graphics",
                                    "Packaging Design",
                                    "Print Media Assets",
                                    "Illustration & Iconography",
                                    "Brochure & Flyer Design",
                                    "Brand Style Guides",
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

                        {/* Grid */}
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
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Creative Process</h3>
                            <p className="text-gray-600 text-sm">
                                We combine artistic expertise with marketing principles to create designs that not only look good but perform. Our tools include Adobe Illustrator, Photoshop, and InDesign.
                            </p>
                        </div>

                        {/* Feature Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            {[
                                { num: "01", title: "Concept", desc: "Brainstorming and sketching initial design directions." },
                                { num: "02", title: "Refining", desc: "Fine-tuning the artwork with color and typography." },
                                { num: "03", title: "Presentation", desc: "Showing the final assets in real-world mockups." },
                                { num: "04", title: "Delivery", desc: "Providing all necessary file formats for print and digital." },
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
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
                            <ul className="list-none space-y-2">
                                {[
                                    "Tailored designs to represent your brand voice.",
                                    "High-quality vectors and print-ready files.",
                                    "Quick turnaround times for urgent project.",
                                    "Revision support to ensure 100% satisfaction.",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-700 text-sm">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>{item.sm}</span>
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

export default GraphicsDesignDetails;
