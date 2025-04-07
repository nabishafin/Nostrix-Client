import React, { useEffect, useState } from 'react';
import PageBanner from '../../components/shared/PageBanner';
import Heading from '../../components/shared/Heading';
import BlogsCard from '../../components/shared/BlogsCard';
import { FaSearch } from 'react-icons/fa';

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
        },
        {
            title: 'Beyond Functionality: The Importance of Design in M...',
            date: '14 April 2024',
        },
        {
            title: 'Responsive Design: The Key to Modern Website Develo...',
            date: '15 April 2024',
        },
    ];
    const [blogs, Setblogs] = useState(0)

    useEffect(() => {
        // Initial fetch to load first 3 projects
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => Setblogs(data))  // Fetch first 3 projects
            .catch(error => console.error('Error fetching data:', error));  // Handle any potential errors
    }, []);

    console.log(blogs)
    return (
        <div>
            <PageBanner
                title={'Blogs'}
                subtitle={'Blogs'}
            />
            <div className='mt-20'>
                <Heading
                    title={'News & Blogs'}
                    subtitle={'Our Latest News & Blogs'}
                ></Heading>
            </div>
            {/* content */}
            <div className='md:w-10/12 w-full px-4 md:px-0 mx-auto gap-3  flex flex-col md:flex-row mt-10'>
                <div className='md:w-9/12 w-full  '>
                    {
                        blogs.length > 0 ? (
                            blogs.map(blog => (
                                <BlogsCard
                                    textColor={'text-black'}
                                    blog={blog}
                                />
                            ))
                        ) : (
                            <p>Loading blogs...</p>  // Display loading message while data is being fetched
                        )
                    }
                </div>
                <div className='w-full md:w-3/12 '>
                    <h1 className='text-3xl border-l-4 border-primary pl-3 font-bold'>Search</h1>
                    <div className="flex items-center border  rounded-md px-2 py-4 mb-4 mt-4">
                        <input
                            type="text"
                            placeholder="Search"
                            className="flex-grow outline-none text-2xl font-semibold"
                        />
                        <FaSearch size={30} className="text-gray-500" />
                    </div>
                    <h1 className='text-3xl border-l-4 border-primary pl-3 font-bold mt-6'>Poplar Category</h1>
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

                    <div className="container mx-auto ">
                        {/* Recent Post Header */}
                        <h1 className='text-3xl border-l-4 border-primary pl-3 font-bold mt-6'>Poplar Category</h1>

                        {/* Post List */}
                        <ul className="space-y-4 mt-4 ">
                            {posts.map((post, index) => (
                                <li
                                    key={index}
                                    className="flex items-start border-b border-dashed border-gray-300 pb-4"
                                >
                                    {/* Placeholder Image */}
                                    <div className="w-20 h-20 bg-gray-200 mr-4"></div>

                                    {/* Post Content */}
                                    <div>
                                        <h3 className="font-semibold">{post.title}</h3>
                                        <p className="text-sm text-gray-500">{post.date}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className='mb-10'>
                            <div className="container mx-auto ">
                                {/* Container with border */}
                                <div className="rounded-xl p-4 relative">
                                    {/* Gradient Background */}
                                    <div className="mt-10 absolute  inset-0 bg-gradient-to-b from-gray-200 to-gray-600 rounded-xl h-[480px]"></div>

                                    {/* Content */}
                                    <div className="relative z-10 mt-[220px] text-center py-10">
                                        <p className="text-sm text-gray-700 mb-2">- Get A Quote</p>
                                        <h2 className="text-2xl font-bold text-white mb-4">
                                            Looking For <span className="text-lime-400">Trusted</span> <br />
                                            Digital Agency?
                                        </h2>
                                        <button className="bg-lime-500 text-white py-2 px-6 rounded-full font-semibold hover:bg-lime-600">
                                            Hire Us Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blogs;