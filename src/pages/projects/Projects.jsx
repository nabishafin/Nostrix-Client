import React, { useState, useEffect } from 'react';
import PageBanner from '../../components/shared/PageBanner';
import Heading from '../../components/shared/Heading';
import ProjectCard from '../../components/shared/ProjectCard';
import Marque from '../../components/shared/Marque';
import ContactUs from '../../components/ui/ContactUs';
import Testimonials from '../../components/ui/Testimonials';
import { useGetProjectsQuery } from '../../redux/features/projects/projectsApi';

const Projects = () => {
    const { data: projectData = [], isLoading, isError } = useGetProjectsQuery();
    
    const [datas, setDatas] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        if (projectData.length > 0) {
            setDatas(projectData.slice(0, 3));
        }
    }, [projectData]);

    const handleMoreData = () => {
        setDatas(projectData);
        setShowAll(true);
    };

    const handleBack = () => {
        setDatas(projectData.slice(0, 3));
        setShowAll(false);
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen bg-black">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    return (
        <div>
            <div>
                <PageBanner title={'Projects'} subtitle={'Our Latest Projects'} />
                <Marque />
            </div>

            <div className='md:w-10/12 w-full px-4 md:px-0 mx-auto min-h-[400px]'>
                <Heading title={'Our Projects'} subtitle={'Our Recent Work Portfolio'} />

                {isError ? (
                    <div className="text-center mt-10 text-red-500 font-bold">
                        Failed to load projects. Please try again later.
                    </div>
                ) : projectData.length === 0 ? (
                    <div className="text-center mt-10 text-gray-500 font-semibold italic text-xl">
                        No projects found at the moment. Coming soon!
                    </div>
                ) : (
                    <>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 '>
                            {
                                datas.map((data, index) => (
                                    <ProjectCard
                                        key={data._id || index}
                                        bgcolor="bg-base-200"
                                        data={data}
                                        textColor="text-black"
                                        categorybg="bg-[#20D374]"
                                        borderColor={'border-white'}
                                    />
                                ))
                            }
                        </div>

                        {
                            projectData.length > 3 && (
                                <div className='text-center mt-10'>
                                    {
                                        showAll ? (
                                            <button
                                                onClick={handleBack}
                                                className="px-3 py-2 rounded-full bg-primary font-semibold text-black hover:bg-black hover:text-white transition-all"
                                            >
                                                See Previous
                                            </button>
                                        ) : (
                                            <button
                                                onClick={handleMoreData}
                                                className="px-3 py-2 rounded-full bg-primary font-semibold text-black hover:bg-black hover:text-white transition-all"
                                            >
                                                Load More Projects
                                            </button>
                                        )
                                    }
                                </div>
                            )
                        }
                    </>
                )}
            </div>

            <ContactUs bg={'bg-black'} textColor={'text-white'} bginput={'bg-gray-800'} />
            <Testimonials />
        </div>
    );
};

export default Projects;
