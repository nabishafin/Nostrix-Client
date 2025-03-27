import { FaArrowRight } from "react-icons/fa";
import React from 'react';
import Marque from '../shared/Marque';
import ProjectCard from "../shared/ProjectCard";


const WorkPortfolio = () => {
    const cardsData = [
        {
            id: 1,
            image: "https://ibb.co.com/xqYnG2r1", // You can add the image URL here
            tags: ["UI / UX Design", "App Design", "Wireframe"],
            title: "Podcast - Podcast",
            description: "Mobile App Solution",
        },
        {
            id: 2,
            image: "https://ibb.co.com/mVDrwry8",
            tags: ["Web Development", "Frontend", "React"],
            title: "Website Development",
            description: "E-commerce Web Solution",
        },
        // Add more objects as needed
    ];
    return (
        <section className='bg-black'>
            <div>
                <Marque />
            </div>
            <div className='w-10/12 mx-auto border-2  pt-10'>
                <div className='flex items-center gap-2'>
                    <hr className='w-6 h-1 bg-primary border-0' />
                    <h1 className='text-white font-semibold text-xl'> Our Projects
                    </h1>
                </div>
                <h1 className='text-3xl mt-1 text-white font-bold'>Our Recent Work Portfolio</h1>
                <div className=' flex justify-between items-center'>
                    <p className='text-4xl font-bold text-primary'>Work Portfolio</p>
                    <div className="flex gap-2 items-center text-xl mt-1 text-white pr-2 rounded-3xl bg-white">
                        <p className="text-xl text-white px-3 py-2 rounded-3xl bg-primary">Learn More</p>
                        <p>
                            <FaArrowRight size={40} className="bg-black p-2 rounded-full text-primary" />
                        </p>
                    </div>
                </div>

                {/* cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-8'>
                    {
                        cardsData.map(data =>
                            <ProjectCard
                                data={data}
                            ></ProjectCard>)
                    }
                </div>
            </div>
            <div>
                <Marque />
            </div>
        </section>
    );
};

export default WorkPortfolio;