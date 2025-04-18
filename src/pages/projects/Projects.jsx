import React, { useEffect, useState } from 'react';
import PageBanner from '../../components/shared/PageBanner';
import Heading from '../../components/shared/Heading';
import ProjectCard from '../../components/shared/ProjectCard';
import Marque from '../../components/shared/Marque';
import ContactUs from '../../components/ui/ContactUs';
import Testimonials from '../../components/ui/Testimonials';

const Projects = () => {
    const [datas, setDatas] = useState([]);
    const [allProjects, setAllProjects] = useState([]); // Store full list
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => {
                setAllProjects(data);            // Store full list once
                setDatas(data.slice(0, 3));      // Show first 3 initially
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleMoreData = () => {
        const moreProjects = allProjects.slice(3); // Get remaining projects
        setDatas(prev => [...prev, ...moreProjects]);
        setShowAll(true);
    };

    const handleBack = () => {
        setDatas(allProjects.slice(0, 3));
        setShowAll(false);
    };

    return (
        <div>
            <div>
                <PageBanner
                    title={'Projects'}
                    subtitle={'Our Latest Projects'}
                />
                <Marque />
            </div>

            <div className='md:w-10/12 w-full px-4 md:px-0 mx-auto'>
                <Heading
                    title={'Our Projects'}
                    subtitle={'Our Recent Work Portfolio'}
                />

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 '>
                    {
                        datas.length > 0 ? (
                            datas.map((data, index) => (
                                <ProjectCard
                                    key={index}
                                    bgcolor="bg-base-200"
                                    data={data}
                                    textColor="text-black"
                                    categorybg="bg-[#20D374]"
                                    borderColor={'border-white'}
                                />
                            ))
                        ) : (
                            <p>Loading projects...</p>
                        )
                    }
                </div>

                {
                    allProjects.length > 3 && (
                        <div className='text-center mt-10'>
                            {
                                showAll ? (
                                    <button
                                        onClick={handleBack}
                                        className="px-3 py-2 rounded-full bg-primary font-semibold text-black"
                                    >
                                        See Previous
                                    </button>
                                ) : (
                                    <button
                                        onClick={handleMoreData}
                                        className="px-3 py-2 rounded-full bg-primary font-semibold text-black"
                                    >
                                        Load More Projects
                                    </button>
                                )
                            }
                        </div>
                    )
                }
            </div>

            <ContactUs
                bg={'bg-black'}
                textColor={'text-white'}
                bginput={'bg-gray-800'}
            />

            <Testimonials />
        </div>
    );
};

export default Projects;
