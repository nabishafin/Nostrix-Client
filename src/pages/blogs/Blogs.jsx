import React, { useState, useEffect } from 'react';
import PageBanner from '../../components/shared/PageBanner';
import Heading from '../../components/shared/Heading';
import BlogsCard from '../../components/shared/BlogsCard';
import { FaSearch } from 'react-icons/fa';
import { useGetBlogsQuery } from '../../redux/features/blogs/blogsApi';
import bg from '../../assets/blog-bg.jpg';

const Blogs = () => {
    const { data: blogsData = [], isLoading, isError } = useGetBlogsQuery();

    const categories = [
        'Mobile Application Development',
        'Website Development',
        'UX/UI Design',
        'Graphics Design',
        'Digital Marketing',
    ];

    // Mock recent posts for now, or could fetch from blogsData
    const posts = blogsData.slice(0, 3).map(blog => ({
        title: blog.title,
        date: blog.date,
        image: blog.image
    }));

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [filteredBlogs, setFilteredBlogs] = useState([]);

    useEffect(() => {
        const filtered = blogsData.filter(blog => {
            const matchesSearch =
                blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                blog.category.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesCategory = selectedCategory
                ? blog.category === selectedCategory
                : true;

            return matchesSearch && matchesCategory;
        });
        setFilteredBlogs(filtered);
    }, [blogsData, searchTerm, selectedCategory]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen bg-black">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    return (
        <div>
            <PageBanner title="Blogs" subtitle="Blogs" />
            <div className="mt-20">
                <Heading title="News & Blogs" subtitle="Our Latest News & Blogs" />
            </div>

            <div className="md:w-10/12 w-full px-4 md:px-0 mx-auto gap-3 flex flex-col md:flex-row mt-10">
                {/* Blog Content Section */}
                <div className="md:w-9/12 w-full">
                    {filteredBlogs.length > 0 ? (
                        filteredBlogs.map((blog, index) => (
                            <BlogsCard key={index} id={index + 1} textColor="text-black" blog={blog} />
                        ))
                    ) : (
                        <p>No blogs found.</p>
                    )}
                </div>

                {/* Sidebar Section */}
                <div className="w-full md:w-3/12">
                    {/* Search */}
                    <h1 className="text-3xl border-l-4 border-primary pl-3 font-bold">Search</h1>
                    <div className="flex items-center border rounded-md px-2 py-4 mb-4 mt-4">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="flex-grow outline-none text-2xl font-semibold"
                        />
                        <FaSearch size={30} className="text-gray-500" />
                    </div>

                    {/* Categories */}
                    <h1 className="text-3xl border-l-4 border-primary pl-3 font-bold mt-6">Popular Category</h1>
                    <ul className="space-y-2 mt-4">
                        <li
                            onClick={() => setSelectedCategory('')}
                            className={`cursor-pointer p-3 rounded-md border-b border-gray-200 
                            ${selectedCategory === '' ? 'bg-primary text-white' : 'bg-gray-100'}`}
                        >
                            All
                        </li>
                        {categories.map((category, index) => (
                            <li
                                key={index}
                                onClick={() => setSelectedCategory(category)}
                                className={`cursor-pointer p-3 rounded-md border-b border-gray-200 
                                ${selectedCategory === category ? 'bg-primary text-white' : 'bg-gray-100'}`}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>

                    {/* Recent Posts */}
                    <h1 className="text-3xl border-l-4 border-primary pl-3 font-bold mt-6">Recent Post</h1>
                    <ul className="space-y-4 mt-4">
                        {posts.map((post, index) => (
                            <li
                                key={index}
                                className="flex items-start border-b border-dashed border-gray-300 pb-4"
                            >
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-20 h-20 object-cover rounded mr-4"
                                />
                                <div>
                                    <h3 className="font-semibold">{post.title}</h3>
                                    <p className="text-sm text-gray-500">{post.date}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Banner Box */}
                    <div className="rounded-xl p-4 relative overflow-hidden mt-8">
                        <div
                            className="absolute inset-0 bg-cover bg-center rounded-xl h-[480px]"
                            style={{ backgroundImage: `url(${bg})` }}
                        ></div>
                        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl h-[480px]"></div>
                        <div className="relative z-10 mt-[220px] text-center py-10">
                            <p className="text-sm text-gray-200 mb-2">- Get A Quote</p>
                            <h2 className="text-2xl font-bold text-white mb-4">
                                Looking For <span className="text-primary">Trusted</span> <br />
                                Digital Agency?
                            </h2>
                            <button className="bg-primary text-white py-2 px-6 rounded-full font-semibold hover:bg-black">
                                Hire Us Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
