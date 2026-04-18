import React from 'react';
import Marque from '../shared/Marque';
import LearnMoreButton from "../shared/LearnMoreButton";
import { Link } from "react-router-dom";
import { useGetBlogsQuery } from "../../redux/features/blogs/blogsApi";

const NewsBlogs = () => {
    const { data: blogsData = [], isLoading } = useGetBlogsQuery();

    // Default sample blogs if database is empty
    const defaultBlogs = [
        {
            _id: 'sample-b1',
            title: 'Exploring Modern Web Trends',
            category: 'Tech',
            date: 'May 10, 2024',
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
            description: 'Stay ahead of the curve by learning about the latest trends in modern web development.'
        },
        {
            _id: 'sample-b2',
            title: 'Design Thinking for Success',
            category: 'Design',
            date: 'May 12, 2024',
            image: 'https://images.unsplash.com/photo-1558655146-d09347e92766',
            description: 'How a user-centric design approach can transform your product and business strategy.'
        },
        {
            _id: 'sample-b3',
            title: 'Maximizing SEO in 2024',
            category: 'Marketing',
            date: 'May 14, 2024',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
            description: 'Learn the key SEO strategies to rank higher and drive more organic traffic this year.'
        },
        {
            _id: 'sample-b4',
            title: 'Building Scalable Apps',
            category: 'Development',
            date: 'May 16, 2024',
            image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
            description: 'A deep dive into building applications that grow with your user base seamlessly.'
        }
    ];

    if (isLoading) return <div className="flex justify-center p-10"><span className="loading loading-spinner text-[#20D374]"></span></div>;

    // Use fetched data if available, otherwise use defaults
    const dataToShow = blogsData.length > 0 ? blogsData.slice(0, 4) : defaultBlogs;

    return (
        <div>
            <section className='bg-black md:p-0'>
                <div>
                    <Marque />
                </div>
                <div className='w-full md:w-10/12 mx-auto py-12 md:py-20 px-4 md:px-0'>
                    <div className='flex items-center gap-2'>
                        <hr className='w-6 h-1 bg-primary border-0' />
                        <h1 className='text-white font-semibold text-lg md:text-xl'>News & Blogs</h1>
                    </div>
                    <h1 className='text-2xl md:text-3xl mt-1 text-white font-bold'>Our Latest News & Blogs</h1>
                    <div className='flex justify-between items-center mt-2'>
                        <p className='text-3xl md:text-4xl font-bold text-primary'>News & Blogs</p>
                        <Link to={'/blogs'}>
                            <LearnMoreButton />
                        </Link>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mt-8'>
                        {dataToShow.map((item) => (
                            <Link to={`/blogs/${item._id}`} state={{ blog: item }} key={item._id} className="block h-[500px]">
                                <div className="bg-black text-white rounded-2xl py-4 px-2 cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105 flex flex-col justify-between h-full">
                                    <div>
                                        <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center overflow-hidden">
                                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="mt-4 flex gap-6 items-center">
                                            <span className="text-xs p-1 border-l-2 border-r-2 rounded-lg backdrop-blur-3xl shadow-lg border-primary bg-slate-950">
                                                {item.category}
                                            </span>
                                            <span className="text-xs p-1 border-l-2 border-r-2 rounded-lg backdrop-blur-3xl shadow-lg border-primary bg-slate-950">
                                                {item.date}
                                            </span>
                                        </div>
                                        <h2 className="text-xl font-semibold mt-4 line-clamp-2">{item.title}</h2>
                                        <p className="text-sm mt-2 line-clamp-3">{item.description || item.desc}</p>
                                    </div>
                                    <div className="text-primary mb-10 block font-bold transition-all hover:translate-x-1">
                                        Read More
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div>
                    <Marque />
                </div>
            </section>
        </div>
    );
};

export default NewsBlogs;
