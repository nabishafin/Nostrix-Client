import React from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import PageBanner from '../../components/shared/PageBanner';
import { FaCalendarAlt, FaUserEdit, FaTags } from 'react-icons/fa';

const BlogDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const blog = location.state?.blog;

    if (!blog) {
        return (
            <div className="text-center py-40">
                <h1 className="text-3xl font-bold">Blog Article Not Found</h1>
                <Link to="/blogs" className="text-primary mt-4 inline-block font-semibold">Go back to blogs</Link>
            </div>
        );
    }

    return (
        <section>
            <PageBanner title="Blog Details" subtitle={blog.title} />
            <div className="px-4 md:px-0 w-full md:w-8/12 mx-auto mt-16 mb-20 text-black">

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 mb-6 text-gray-600 font-medium">
                    <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-primary" />
                        <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaUserEdit className="text-primary" />
                        <span>By Nostrix Team</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaTags className="text-primary" />
                        <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">{blog.category || blog.tag}</span>
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">{blog.title}</h1>

                {/* Featured Image */}
                <img
                    src={blog.image || blog.img}
                    alt={blog.title}
                    className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-xl mb-12"
                />

                {/* Content Body */}
                <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
                    <p className="text-xl font-semibold mb-6 text-gray-700">
                        {blog.description || blog.desc}
                    </p>

                    <p className="mb-6">
                        In today's fast-paced digital ecosystem, understanding the core principles of {blog.category || blog.tag} is more critical than ever. We've seen firsthand how adopting modern practices not only boosts efficiency but directly translates to better user engagement and higher overall satisfaction.
                    </p>

                    <h2 className="text-2xl font-bold mt-10 mb-4">Why This Matters</h2>
                    <p className="mb-6">
                        Organizations that overlook the fundamentals often find themselves struggling to keep pace with industry standards. Whether it is ensuring lightning-fast performance, crafting intuitive interfaces, or establishing a coherent brand voice, these elements form the foundation of any successful digital platform.
                    </p>

                    <div className="bg-gray-100 p-8 rounded-xl border-l-4 border-primary my-10 italic text-xl text-gray-700">
                        "Great design and development are not just about how it looks, but how it seamlessly solves a problem for the end user."
                    </div>

                    <h2 className="text-2xl font-bold mt-10 mb-4">Key Takeaways</h2>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Focus heavily on your target audience's core needs.</li>
                        <li>Maintain consistency across all touchpoints.</li>
                        <li>Never sacrifice performance for aesthetic flair unless truly necessary.</li>
                        <li>Iterate quickly based on real user feedback.</li>
                    </ul>

                    <p className="mb-10">
                        As we move forward into exploring more advanced techniques, keeping these basic foundations solid will save time, resources, and ensure a scalable architecture. Stay tuned for our next update where we dive deeper into practical implementations of these concepts!
                    </p>
                </div>

                {/* Back Button */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <Link to="/blogs" className="px-8 py-3 bg-primary text-black rounded-full font-bold hover:bg-black hover:text-white transition-all shadow-lg text-lg inline-block">
                        &larr; Back to All Blogs
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogDetails;
