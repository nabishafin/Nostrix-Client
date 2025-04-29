import React, { useState } from 'react';
import PageBanner from '../../components/shared/PageBanner';
import Heading from '../../components/shared/Heading';
import ProjectCard from '../../components/shared/ProjectCard';
import Marque from '../../components/shared/Marque';
import ContactUs from '../../components/ui/ContactUs';
import Testimonials from '../../components/ui/Testimonials';

// Importing images dynamically
import fitnessImg from '../../assets/fitness-img.png';
import ecommerceImg from '../../assets/E-commerce Page img.jpg';
import mobileAppUi from '../../assets/mobileapp ui.jpeg';
import portfolioImg from '../../assets/portfolio-img.webp';
import moneyMgmtImg from '../../assets/money-managment-img.png';
import shoppingPlatformImg from '../../assets/Shopping Platform-img.png';

const Projects = () => {
    // Directly embedded data with imported images
    const projectData = [
        {
            id: 1,
            image: fitnessImg,
            tags: ["UI/UX", "Mobile", "Design"],
            title: "Fitness Tracker",
            description: "A mobile app for tracking daily fitness activities."
        },
        {
            id: 2,
            image: ecommerceImg,
            tags: ["Web", "Landing", "Visual"],
            title: "E-commerce Page",
            description: "A visually appealing landing page for an online store."
        },
        {
            id: 3,
            image: mobileAppUi,
            tags: ["App", "Wireframe", "Prototype"],
            title: "Social Media App",
            description: "Conceptual design and wireframes for a new social media app."
        },
        {
            id: 4,
            image: portfolioImg,
            tags: ["Web", "Portfolio", "Development"],
            title: "Portfolio Website",
            description: "A professional portfolio website to showcase skills and projects."
        },
        {
            id: 5,
            image: moneyMgmtImg,
            tags: ["Mobile", "Utility", "UI"],
            title: "Task Manager",
            description: "A simple and efficient app for managing daily tasks."
        },
        {
            id: 6,
            image: shoppingPlatformImg,
            tags: ["E-commerce", "UX", "Responsive"],
            title: "Shopping Platform",
            description: "A user-friendly e-commerce platform with responsive design."
        }
    ];

    const [datas, setDatas] = useState(projectData.slice(0, 3));
    const [showAll, setShowAll] = useState(false);

    const handleMoreData = () => {
        setDatas(projectData);
        setShowAll(true);
    };

    const handleBack = () => {
        setDatas(projectData.slice(0, 3));
        setShowAll(false);
    };

    return (
        <div>
            <div>
                <PageBanner title={'Projects'} subtitle={'Our Latest Projects'} />
                <Marque />
            </div>

            <div className='md:w-10/12 w-full px-4 md:px-0 mx-auto'>
                <Heading title={'Our Projects'} subtitle={'Our Recent Work Portfolio'} />

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 '>
                    {
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
                    }
                </div>

                {
                    projectData.length > 3 && (
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

            <ContactUs bg={'bg-black'} textColor={'text-white'} bginput={'bg-gray-800'} />
            <Testimonials />
        </div>
    );
};

export default Projects;
