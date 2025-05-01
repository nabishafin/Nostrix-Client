import React, { useState } from 'react';
import PageBanner from '../../components/shared/PageBanner';
import Heading from '../../components/shared/Heading';
import BlogsCard from '../../components/shared/BlogsCard';
import { FaSearch } from 'react-icons/fa';
import postimg1 from '../../assets/blog-1-Crafting.webp';
import postimg2 from '../../assets/blogimg-2-colabreation.jpg';
import postimg3 from '../../assets/blog-3-boastinteam.webp';
import postimg4 from '../../assets/React-vs vue.jpg';
import postimg5 from '../../assets/Building Your First Mobile App from Scratch.png';
import bg from '../../assets/blog-bg.jpg';

const Blogs = () => {
    const categories = [
        'Mobile Application Development',
        'Website Development',
        'UX/UI Design',
        'Graphics Design',
        'Digital Marketing',
    ];

    const posts = [
        {
            title: 'Empathy in Design: Putting Users First in UX/UI',
            date: '15 April 2024',
            image: postimg1,
        },
        {
            title: 'Beyond Functionality: The Importance of Design in Modern Apps',
            date: '14 April 2024',
            image: postimg2,
        },
        {
            title: 'Responsive Design: The Key to Modern Website Development',
            date: '15 April 2024',
            image: postimg3,
        },
    ];

    // Fake JSON data (simulating what would come from an API)
    const fakeBlogsData = [
        {
            image: postimg1,
            category: 'Design',
            date: '01 January 2024',
            title: 'Crafting User Interfaces That Work',
            description: 'A quick dive into the best practices for designing simple and effective UI layouts.',
            link: '#'
        },
        {
            image: postimg2,
            category: 'Teamwork',
            date: '05 February 2024',
            title: 'The Power of Collaboration in Remote Teams',
            description: 'How remote teams can still be creative and productive using the right tools and mindset.',
            link: '#'
        },
        {
            image: postimg3,
            category: 'Marketing',
            date: '12 March 2024',
            title: 'Simple SEO Hacks for Beginners',
            description: 'Boost your visibility online with these easy and effective SEO strategies.',
            link: '#'
        },
        {
            image: postimg4,
            category: 'Development',
            date: '18 April 2024',
            title: 'React vs Vue: Which One Should You Choose?',
            description: 'A head-to-head comparison between two of the most popular frontend frameworks.',
            link: '#'
        },
        {
            image: postimg5,
            category: 'Mobile Apps',
            date: '25 May 2024',
            title: 'Building Your First Mobile App from Scratch',
            description: 'Everything you need to know to get started with mobile app development.',
            link: '#'
        }
    ];

    // Set the fake blogs data to the state
    const [blogs, setBlogs] = useState(fakeBlogsData);

    return (
        <div>
            <PageBanner title="Blogs" subtitle="Blogs" />
            <div className="mt-20">
                <Heading
                    title="News & Blogs"
                    subtitle="Our Latest News & Blogs"
                />
            </div>

            <div className="md:w-10/12 w-full px-4 md:px-0 mx-auto gap-3 flex flex-col md:flex-row mt-10">
                {/* Blog Content Section */}
                <div className="md:w-9/12 w-full">
                    {blogs.length > 0 ? (
                        blogs.map((blog, index) => (
                            <BlogsCard
                                key={index}
                                textColor="text-black"
                                blog={blog}
                            />
                        ))
                    ) : (
                        <p>Loading blogs...</p>
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
                            className="flex-grow outline-none text-2xl font-semibold"
                        />
                        <FaSearch size={30} className="text-gray-500" />
                    </div>

                    {/* Categories */}
                    <h1 className="text-3xl border-l-4 border-primary pl-3 font-bold mt-6">Popular Category</h1>
                    <ul className="space-y-2 mt-4">
                        {categories.map((category, index) => (
                            <li
                                key={index}
                                className="bg-gray-100 p-3 rounded-md border-b border-gray-200"
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
                            <button className="bg-primary text-white py-2 px-6 rounded-full font-semibold hover:bg-lime-600">
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
