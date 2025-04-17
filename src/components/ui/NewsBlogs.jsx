import React from 'react';
import Marque from '../shared/Marque';
import pic1 from "../../assets/blogimg-1-desining.webp";
import pic2 from "../../assets/blogimg-2-colabreation.jpg";
import pic3 from "../../assets/blog-3-boastinteam.webp";
import pic4 from "../../assets/blogimg-4 next js vs react.jpeg";
import LearnMoreButton from "../shared/LearnMoreButton";
import { Link } from "react-router-dom";

const NewsBlogs = () => {
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
                    <div className='flex justify-between items-center mt-6'>
                        <p className='text-3xl md:text-4xl font-bold text-primary'>News & Blogs</p>
                        <Link to={'/blogs'}>
                            <LearnMoreButton />
                        </Link>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mt-8'>
                        {/* card template */}
                        {[{
                            img: pic1,
                            tag: 'UI/UX Design',
                            date: '10 April 2024',
                            title: 'Designing Intuitive Mobile Experiences in 2024',
                            desc: 'Explore how user-centered design is reshaping app engagement and user satisfaction in today\'s fast-moving tech world.'
                        }, {
                            img: pic2,
                            tag: 'Team Culture',
                            date: '15 April 2024',
                            title: 'Inside Our Team: How Collaboration Drives Innovation',
                            desc: 'Get a peek behind the scenes at how our team works together  to build creative solutions  and tackle digital challenges.'
                        }, {
                            img: pic3,
                            tag: 'Marketing',
                            date: '18 April 2024',
                            title: 'Boosting App Visibility: Growth Tactics That Work',
                            desc: 'Discover the strategies we use to amplify app downloads and keep users coming back through performance-driven marketing.'
                        }, {
                            img: pic4,
                            tag: 'Development',
                            date: '21 April 2024',
                            title: 'Next.js vs React: What We Chose and Why',
                            desc: 'We break down the pros and cons of React and Next.js — and why one of them fits our workflow better for client projects.'
                        }].map((item, index) => (
                            <div key={index} className="bg-black  text-white rounded-2xl py-4 px-2  cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105 flex flex-col justify-between h-[500px]">
                                <div>
                                    <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center overflow-hidden">
                                        <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="mt-4 flex gap-6 items-center">
                                        <span className="text-xs p-1 border-l-2 border-r-2 rounded-lg backdrop-blur-3xl shadow-lg border-primary bg-slate-950">{item.tag}</span>
                                        <span className="text-xs p-1 border-l-2 border-r-2 rounded-lg backdrop-blur-3xl shadow-lg border-primary bg-slate-950">{item.date}</span>
                                    </div>
                                    <h2 className="text-xl font-semibold mt-4">{item.title}</h2>
                                    <p className="text-sm mt-2">{item.desc}</p>
                                </div>
                                <a href="#" className="text-primary mb-10  block">Read More</a>
                            </div>
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
