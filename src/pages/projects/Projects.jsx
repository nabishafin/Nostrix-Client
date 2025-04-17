import React, { useEffect, useState } from 'react';
import PageBanner from '../../components/shared/PageBanner';
import Heading from '../../components/shared/Heading';
import ProjectCard from '../../components/shared/ProjectCard';
import Marque from '../../components/shared/Marque';
import Button from '../../components/shared/Button';
import ContactUs from '../../components/ui/ContactUs';
import Testimonials from '../../components/ui/Testimonials';

const Projects = () => {
    const [datas, setDatas] = useState([]);  // Set the initial state to an empty array

    useEffect(() => {
        // Initial fetch to load first 3 projects
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setDatas(data.slice(0, 3)))  // Fetch first 3 projects
            .catch(error => console.error('Error fetching data:', error));  // Handle any potential errors
    }, []);

    const handleMoreData = () => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => {
                // Append the new projects to the existing ones
                setDatas(prevDatas => [...prevDatas, ...data]);
            })
            .catch(error => console.error('Error fetching more data:', error));  // Handle any potential errors
    };

    const handleBack = () => {
        // Reset the data to show only the first 3 projects
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setDatas(data.slice(0, 3)))  // Fetch first 3 projects again
            .catch(error => console.error('Error fetching data:', error));  // Handle any potential errors
    }

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
                            <p>Loading projects...</p>  // You can display a loading message when data is not loaded
                        )
                    }
                </div>
                {
                    datas.length > 3 ? (
                        <div onClick={handleBack} className='text-center mt-10'>
                            <Button
                                text={'See Previous'}
                            />
                        </div>
                    ) : (
                        <div onClick={handleMoreData} className='text-center mt-10'>
                            <Button
                                text={'Load More Projects'}
                            />
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
