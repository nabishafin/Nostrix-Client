import React from 'react';
import PageBanner from '../components/shared/PageBanner';
import heroimageUrl from '../assets/dg-banner.jpg'
import image1 from '../assets/dm-1.jpg'
import image2 from '../assets/dm-2.webp'

const DigitalMarketingDetails = () => {
    return (
        <section>
            <div>
                <PageBanner
                    title={'Services'}
                    subtitle={'Digital Marketing Details'}
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
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Digital Marketing Services</h2>
                            <div className="flex items-center mb-4">
                                <div className="w-6 h-6 rounded-full bg-green-500 mr-2 flex justify-center items-center text-white text-xs">M</div>
                                <p className="text-gray-600 text-sm">
                                    Our digital marketing strategies help businesses reach their audience, increase sales, and build a lasting brand. We use data-driven insights to deliver consistent results across all channels.
                                </p>
                            </div>
                        </div>

                        {/* What we offer */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">What We Offer:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {[
                                    "Search Engine Optimization (SEO)",
                                    "Pay-Per-Click (PPC) Advertising",
                                    "Social Media Marketing",
                                    "Email Marketing Campaigns",
                                    "Content Marketing",
                                    "Conversion Optimization",
                                    "Data Analytics & Insights",
                                    "Online Reputation Management",
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

                        {/* Sample Grid */}
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
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our High-Impact Strategy</h3>
                            <p className="text-gray-600 text-sm">
                                We utilize tools like Google Ads, Meta Business Suite, and Google Analytics to track performance and scale campaigns that drive ROI for your business.
                            </p>
                        </div>

                        {/* Strategy Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            {[
                                { num: "01", title: "Audit", desc: "Analyzing your current presence and finding growth areas." },
                                { num: "02", title: "Scaling", desc: "Deploying high-budget campaigns with precision targeting." },
                                { num: "03", title: "Monitoring", desc: "Constant tracking to ensure maximum efficiency." },
                                { num: "04", title: "Results", desc: "Providing detailed monthly reports with clear outcomes." },
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
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Deliverables:</h3>
                            <ul className="list-none space-y-2">
                                {[
                                    "Increased web traffic and high-quality leads.",
                                    "Improved engagement across social media.",
                                    "Reduced cost-per-acquisition (CPA).",
                                    "Consistent month-on-month growth metrics.",
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

export default DigitalMarketingDetails;
