import { useLocation, useParams, Link } from 'react-router-dom';
import PageBanner from '../../components/shared/PageBanner';
import { FaCalendarAlt, FaUser, FaTags, FaArrowLeft } from 'react-icons/fa';
import { useGetSingleBlogQuery } from '../../redux/features/blogs/blogsApi';

const BlogDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const { data: apiData, isLoading, isError } = useGetSingleBlogQuery(id);
    const blog = apiData || location.state?.data;

    if (isLoading) return <div className="flex justify-center items-center h-screen bg-[#FAF9F6]"><span className="loading loading-bars text-[#20D374] loading-lg"></span></div>;

    if (!blog || isError) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-[#FAF9F6]">
                <h1 className="text-4xl font-bold text-[#111827] mb-4">Post Not Found</h1>
                <p className="text-gray-500 mb-10">The requested article could not be retrieved.</p>
                <Link to="/blogs" className="btn bg-[#20D374] hover:bg-[#1bb865] text-white border-none px-10 rounded-xl">Return to Blogs</Link>
            </div>
        );
    }

    return (
        <section className="bg-[#FAF9F6] text-[#111827] pb-24 selection:bg-[#20D374] selection:text-white">
            <PageBanner title="Expert Insights" subtitle={blog.title} />

            <div className="px-4 md:px-0 w-full md:w-10/12 mx-auto mt-20">
                <div className="space-y-16">
                    
                    {/* Simplified Hero Image */}
                    <div className="relative border shadow-sm rounded-3xl h-64 md:h-[550px] overflow-hidden group bg-white">
                        <img 
                            src={blog.image} 
                            alt={blog.title} 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                        />
                    </div>

                    {/* Layout Split: Like Project Details */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        
                        {/* Main Content Area */}
                        <div className="lg:col-span-2 space-y-10">
                            <div className="space-y-6">
                                <h1 className="text-4xl md:text-5xl font-bold text-[#111827] tracking-tight leading-tight">
                                    {blog.title}
                                </h1>
                                <div className="flex items-center gap-6">
                                    <div className="w-10 h-10 rounded-2xl bg-[#20D374] flex shrink-0 justify-center items-center text-white font-bold shadow-lg shadow-[#20D374]/20 text-sm italic">B</div>
                                    <p className="text-xl text-[#4B5563] font-medium leading-relaxed italic">
                                        {blog.description}
                                    </p>
                                </div>
                            </div>

                            <div className="pt-8 space-y-8">
                                <h3 className="text-xl font-bold text-[#111827] border-l-4 border-[#20D374] pl-6 py-1">Article Content</h3>
                                <div className="text-lg text-[#4B5563] leading-relaxed font-medium space-y-6">
                                    {/* Splitting content into paragraphs for clean look */}
                                    {blog.content?.split('\n').map((para, i) => para.trim() && (
                                        <p key={i}>{para}</p>
                                    ))}
                                </div>
                            </div>

                            {/* Simple Callout: Like Project Case Study boxes */}
                            {blog.conclusion && (
                                <div className="p-10 bg-white rounded-3xl border border-gray-100 shadow-sm border-t-4 border-[#20D374]/30">
                                    <h4 className="font-bold text-[#20D374] mb-4 uppercase text-[10px] tracking-widest">Final Takeaway</h4>
                                    <p className="text-[#4B5563] font-medium leading-relaxed italic">
                                        "{blog.conclusion}"
                                    </p>
                                </div>
                            )}

                            <div className="pt-10">
                                <Link to="/blogs" className="text-sm font-bold text-[#20D374] flex items-center gap-2 hover:underline">
                                    <FaArrowLeft /> Back to Article Directory
                                </Link>
                            </div>
                        </div>

                        {/* Sidebar: Replicated from Project Details */}
                        <div className="space-y-6">
                            <div className="bg-white rounded-[2rem] shadow-xl shadow-black/[0.03] border border-gray-100 p-10 space-y-8">
                                <h3 className="text-lg font-bold border-b pb-6 text-[#111827]">Article Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 bg-[#FAF9F6] border border-gray-100 rounded-2xl flex items-center justify-center text-[#20D374]">
                                            <FaCalendarAlt className="text-lg" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Published On</p>
                                            <p className="text-sm font-bold text-[#111827]">{blog.date}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 bg-[#FAF9F6] border border-gray-100 rounded-2xl flex items-center justify-center text-[#20D374]">
                                            <FaUser className="text-lg" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Editorial Team</p>
                                            <p className="text-sm font-bold text-[#111827]">Nostrix Insights</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 bg-[#FAF9F6] border border-gray-100 rounded-2xl flex items-center justify-center text-[#20D374]">
                                            <FaTags className="text-lg" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Category</p>
                                            <p className="text-sm font-bold text-[#111827]">{blog.category}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-gray-100">
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">Contextual Tags</p>
                                    <div className="flex flex-wrap gap-2">
                                        {blog.tags?.map((tag, i) => (
                                            <span key={i} className="px-4 py-1.5 bg-[#FAF9F6] border border-gray-200 rounded-xl text-[10px] font-bold text-[#4B5563] uppercase tracking-wide">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                <Link 
                                    to="/contact" 
                                    className="btn bg-[#20D374] hover:bg-[#1bb865] border-none w-full text-white h-14 mt-6 rounded-2xl font-bold uppercase text-xs tracking-widest shadow-lg shadow-[#20D374]/20"
                                >
                                    Work With Us
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BlogDetails;
