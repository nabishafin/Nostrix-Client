import React from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import PageBanner from '../../components/shared/PageBanner';
import { FaCheckCircle, FaCalendarAlt, FaUserTie, FaLaptopCode } from 'react-icons/fa';

const ProjectDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const data = location.state?.data;

    if (!data) {
        return (
            <div className="text-center py-40">
                <h1 className="text-3xl font-bold">Project Not Found</h1>
                <Link to="/projects" className="text-primary mt-4 inline-block font-semibold">Go back to projects</Link>
            </div>
        );
    }

    return (
        <section>
            <PageBanner title="Project Overview" subtitle={data.title} />
            <div className="px-4 md:px-0 w-full md:w-10/12 mx-auto mt-20 mb-20 text-black">
                
                {/* Hero Section */}
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="w-full md:w-7/12">
                        <img src={data.image} alt={data.title} className="w-full h-auto rounded-lg shadow-lg border-2 border-gray-200" />
                    </div>
                    <div className="w-full md:w-5/12 flex flex-col justify-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.title}</h1>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">{data.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-8">
                            {data.tags?.map((tag, i) => (
                                <span key={i} className="px-4 py-2 bg-primary text-black rounded-full text-sm font-semibold shadow-md">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Quick Project Info */}
                        <div className="grid grid-cols-2 gap-6 bg-gray-100 p-6 rounded-lg">
                            <div>
                                <h4 className="flex items-center text-gray-800 font-bold mb-1"><FaUserTie className="mr-2 text-primary" /> Client</h4>
                                <p className="text-gray-600 text-sm">Nostrix Creative Partner</p>
                            </div>
                            <div>
                                <h4 className="flex items-center text-gray-800 font-bold mb-1"><FaCalendarAlt className="mr-2 text-primary" /> Timeline</h4>
                                <p className="text-gray-600 text-sm">3 Months</p>
                            </div>
                            <div className="col-span-2">
                                <h4 className="flex items-center text-gray-800 font-bold mb-1"><FaLaptopCode className="mr-2 text-primary" /> Technologies Used</h4>
                                <p className="text-gray-600 text-sm">{data.tags ? data.tags.join(', ') : 'React, UI/UX, Web Design'}</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Detailed Analysis Section */}
                <div className="mt-20">
                    <div className="flex items-center gap-2 mb-6">
                        <hr className="w-6 h-1 bg-primary border-0" />
                        <h1 className="text-xl font-bold uppercase tracking-wider">Case Study</h1>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Project Overview & Analysis</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* The Challenge */}
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-primary">The Challenge</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Our client approached us with a vision to revolutionize their digital presence. They were facing issues with low user engagement, slow platform performance, and an outdated visual identity. The primary challenge was to design and develop a scalable solution that not only improved user retention but also showcased their brand effectively across all digital touchpoints.
                            </p>
                        </div>
                        {/* The Solution */}
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-primary">Our Solution</h3>
                            <p className="text-gray-700 leading-relaxed">
                                We initiated the project with comprehensive user research to create highly interactive wireframes. Leveraging modern tech stacks, we developed a fast, accessible, and responsive platform. We implemented clean UI/UX paradigms, optimized core web vitals, and integrated tailored features to ensure a seamless experience and higher conversion rates.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Key Features Section */}
                <div className="mt-16 bg-black text-white p-10 rounded-2xl">
                    <h2 className="text-3xl font-bold mb-8 text-center"><span className="text-primary">Key Features</span> Explored</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "Intuitive & Clean UI/UX",
                            "Lightning Fast Performance",
                            "Fully Responsive Design",
                            "High Scalability Architecture",
                            "Advanced Security Protocols",
                            "Cross-Browser Compatibility",
                            "Custom Analytics Integration",
                            "SEO Optimized Structure"
                        ].map((feature, i) => (
                            <div key={i} className="flex flex-col items-center text-center p-4 bg-gray-900 rounded-lg hover:outline outline-primary outline-1 transition-all">
                                <FaCheckCircle className="text-4xl text-primary mb-3" />
                                <p className="font-semibold text-[15px]">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Result Section */}
                <div className="mt-20 text-center mx-auto md:w-8/12">
                    <h2 className="text-3xl font-bold mb-6">Result & Impact</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-10">
                        Post-launch, the platform saw a <span className="font-bold text-primary">45% increase</span> in overall user engagement and a <span className="font-bold text-primary">30% drop</span> in bounce rates. The renewed identity helped the client acquire a larger market share, ultimately transforming their digital strategies into a solid success story.
                    </p>
                    <Link to="/projects" className="px-8 py-3 bg-primary text-black rounded-full font-bold hover:bg-black hover:text-white transition-all shadow-lg text-lg inline-block">
                        Explore More Projects
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default ProjectDetails;
