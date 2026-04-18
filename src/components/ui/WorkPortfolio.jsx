import { FaArrowRight } from "react-icons/fa";
import React from 'react';
import Marque from '../shared/Marque';
import ProjectCard from "../shared/ProjectCard";
import pic1 from "../../assets/prodCast.jpg"
import pic2 from "../../assets/singleProducts demo ui.webp"
import { Link } from "react-router-dom";
import LearnMoreButton from "../shared/LearnMoreButton";

import { useGetProjectsQuery } from "../../redux/features/projects/projectsApi";

const WorkPortfolio = () => {
    const { data: projectData = [], isLoading } = useGetProjectsQuery();

    // Default sample projects if database is empty
    const defaultProjects = [
        {
            _id: 'sample-1',
            title: 'Project Title',
            category: 'Web Development',
            image: pic1,
            description: 'A sample project description showing how we craft digital excellence.'
        },
        {
            _id: 'sample-2',
            title: 'Creative Solution',
            category: 'UI/UX Design',
            image: pic2,
            description: 'Another sample project showcasing our design and development capabilities.'
        }
    ];

    if (isLoading) return <div className="flex justify-center p-10"><span className="loading loading-spinner text-[#20D374]"></span></div>;

    // Use fetched data if available, otherwise use defaults
    const cardsData = projectData.length > 0 ? projectData.slice(0, 2) : defaultProjects;

    return (

        <section >
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
                                    key={data._id}
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
