import { FaArrowRight } from "react-icons/fa";
import React from 'react';
import Marque from '../shared/Marque';
import ProjectCard from "../shared/ProjectCard";
import pic1 from "../../assets/prodCast.jpg"
import pic2 from "../../assets/singleProducts demo ui.webp"
import { Link } from "react-router-dom";
import LearnMoreButton from "../shared/LearnMoreButton";

const WorkPortfolio = () => {
    const cardsData = [
        {
            id: 1,
            image: pic1, // You can add the image URL here
            tags: ["UI / UX Design", "App Design", "Wireframe"],
            title: "Podcast - Podcast",
            description: "Mobile App Solution",
        },
        {
            id: 2,
            image: pic2,
            tags: ["Web Development", "Frontend", "React"],
            title: "Website Development",
            description: "E-commerce Web Solution",
        },
        // Add more objects as needed
    ];

    return (

        <section >
            <div>
                <Marque />
            </div>
            <div className='bg-black p-4 md:p-0'>
                <div className='w-full md:w-10/12 mx-auto py-12 md:py-20'>
                    <div className='flex items-center gap-2'>
                        <hr className='w-6 h-1 bg-primary border-0' />
                        <h1 className='text-white font-semibold text-lg md:text-xl'> Our Projects</h1>
                    </div>
                    <h1 className='text-2xl md:text-3xl mt-1 text-white font-bold'>Our Recent Work Portfolio</h1>
                    <div className='flex justify-between items-center mt-2'>
                        <p className='text-3xl md:text-4xl font-bold text-primary'>Work Portfolio</p>
                        {/* The button is hidden on mobile and shown on medium screens and up */}
                        <Link to={'/projects'} >
                            <LearnMoreButton />
                        </Link>
                    </div>

                    {/* cards */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
                        {
                            cardsData.map(data =>
                                <ProjectCard
                                    key={data.id}
                                    data={data}
                                    bgcolor={'bg-black'}
                                    textColor="text-white"


                                ></ProjectCard>)
                        }
                    </div>
                </div>
            </div>
            <div>
                <Marque />
            </div>
        </section>
    );
};

export default WorkPortfolio;
