import React, { useEffect, useState } from 'react';
import PageBanner from '../../components/shared/PageBanner';
import Heading from '../../components/shared/Heading';
import BlogsCard from '../../components/shared/BlogsCard';

const Blogs = () => {

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
                <div className='md:w-8/12 w-full  '>
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
                <div className='w-full md:w-4/12 h-40 border-2'>

                </div>
            </div>
        </div>
    );
};

export default Blogs;