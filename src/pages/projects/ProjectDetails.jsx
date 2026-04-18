import { useLocation, useParams, Link } from 'react-router-dom';
import PageBanner from '../../components/shared/PageBanner';
import { FaCheckCircle, FaCalendarAlt, FaUserTie, FaLaptopCode, FaExternalLinkAlt } from 'react-icons/fa';
import { useGetSingleProjectQuery } from '../../redux/features/projects/projectsApi';

const ProjectDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const { data: apiData, isLoading, isError } = useGetSingleProjectQuery(id);
    const data = apiData || location.state?.data;

    if (isLoading) return <div className="flex justify-center items-center h-screen bg-[#FAF9F6]"><span className="loading loading-bars text-[#20D374] loading-lg"></span></div>;

    if (!data || isError) {
        return (
            <div className="flex flex-col items-center justify-center h-screen px-6 text-center bg-[#FAF9F6]">
                <h1 className="text-4xl font-bold text-[#111827] mb-4">Project Not Found</h1>
                <p className="text-gray-500 mb-10">The requested project data could not be retrieved.</p>
                <Link to="/projects" className="btn bg-[#20D374] hover:bg-[#1bb865] text-white border-none px-12">Return to Projects</Link>
            </div>
        );
    }

    return (
        <section className="bg-[#FAF9F6] text-[#111827] pb-20 selection:bg-[#20D374] selection:text-white">
            <PageBanner title="Project Details" subtitle={data.title} />

            <div className="px-4 md:px-0 w-full md:w-10/12 mx-auto mt-20">
                <div className="space-y-16">
                    
                    {/* Hero Image Section */}
                    <div className="relative border shadow-sm rounded-3xl h-48 md:h-64 lg:h-[600px] overflow-hidden group bg-white">
                        <div className="absolute inset-0 bg-black/5 z-10"></div>
                        <img 
                            src={data.image} 
                            alt={data.title} 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                    </div>

                    {/* Overview & Stats */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-2 space-y-8">
                            <h2 className="text-4xl font-bold text-[#111827] tracking-tight">{data.title} Overview</h2>
                            <div className="flex items-start">
                                <div className="w-10 h-10 rounded-2xl bg-[#20D374] mr-6 flex shrink-0 justify-center items-center text-white font-bold shadow-lg shadow-[#20D374]/20">P</div>
                                <p className="text-lg text-[#4B5563] leading-relaxed font-medium">
                                    {data.description}
                                </p>
                            </div>
                            
                            <div className="pt-8 gap-10">
                                <h3 className="text-xl font-bold text-[#111827] mb-8 flex items-center gap-3">
                                    <span className="w-8 h-px bg-[#20D374]"></span> Case Study Breakdown
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm border-t-4 border-red-500/30">
                                        <h4 className="font-bold text-red-500 mb-3 uppercase text-[10px] tracking-widest">The Challenge</h4>
                                        <p className="text-sm text-[#4B5563] italic leading-relaxed">"{data.caseStudy?.challenge}"</p>
                                    </div>
                                    <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm border-t-4 border-[#20D374]/30">
                                        <h4 className="font-bold text-[#20D374] mb-3 uppercase text-[10px] tracking-widest">The Solution</h4>
                                        <p className="text-sm text-[#4B5563] italic leading-relaxed">"{data.caseStudy?.solution}"</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white rounded-[2rem] shadow-xl shadow-black/[0.03] border border-gray-100 p-10 space-y-8 h-full">
                                <h3 className="text-lg font-bold border-b pb-6 text-[#111827]">Project Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 bg-[#FAF9F6] border border-gray-100 rounded-2xl flex items-center justify-center text-[#20D374]">
                                            <FaUserTie className="text-xl" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Client Partner</p>
                                            <p className="text-sm font-bold text-[#111827]">{data.clientInfo?.name}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 bg-[#FAF9F6] border border-gray-100 rounded-2xl flex items-center justify-center text-[#20D374]">
                                            <FaCalendarAlt className="text-xl" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Timeline</p>
                                            <p className="text-sm font-bold text-[#111827]">{data.clientInfo?.duration}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 bg-[#FAF9F6] border border-gray-100 rounded-2xl flex items-center justify-center text-[#20D374]">
                                            <FaLaptopCode className="text-xl" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Industry Category</p>
                                            <p className="text-sm font-bold text-[#111827]">{data.category || "Full-Stack Development"}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-6 border-t border-gray-100">
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">Stack Utilization</p>
                                    <div className="flex flex-wrap gap-2">
                                        {data.tags?.map((tag, i) => (
                                            <span key={i} className="px-4 py-1.5 bg-[#FAF9F6] border border-gray-200 rounded-xl text-[10px] font-bold text-[#4B5563] uppercase tracking-wide">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <a 
                                    href={data.liveLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn bg-[#20D374] hover:bg-[#1bb865] border-none w-full text-white h-14 mt-6 rounded-2xl font-bold shadow-lg shadow-[#20D374]/20"
                                >
                                    Visit Project <FaExternalLinkAlt className="ml-3 text-xs" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Features Grid */}
                    {data.caseStudy?.keyFeatures?.length > 0 && (
                        <div className="pt-16 border-t border-gray-200">
                            <h3 className="text-2xl font-bold text-[#111827] mb-10 text-center tracking-tight">Functional Capabilities</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {data.caseStudy.keyFeatures.map((feature, i) => (
                                    <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                        <div className="w-10 h-10 bg-[#FAF9F6] text-[#20D374] border border-gray-100 rounded-2xl flex items-center justify-center mb-6 text-sm font-bold">
                                            {String(i + 1).padStart(2, '0')}
                                        </div>
                                        <p className="text-sm font-bold text-[#4B5563] leading-relaxed">{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Impact Section */}
                    <div className="bg-white p-12 md:p-24 rounded-[3rem] mt-20 text-center space-y-8 border border-gray-200 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#20D374]/5 rounded-full blur-[80px]"></div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#20D374] bg-[#20D374]/10 px-6 py-2 rounded-full">Project Outcome</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#111827] italic tracking-tight leading-tight max-w-4xl mx-auto">
                            "{data.caseStudy?.resultImpact}"
                        </h2>
                        <div className="pt-8">
                             <a href={data.liveLink} target="_blank" rel="noopener noreferrer" className="btn bg-[#20D374] hover:bg-[#1bb865] border-none text-white px-14 h-16 rounded-2xl font-bold text-lg shadow-xl shadow-[#20D374]/20">
                                EXPLORE LIVE PREVIEW
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;
