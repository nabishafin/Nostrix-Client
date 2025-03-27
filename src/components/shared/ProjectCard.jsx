import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectCard = ({ data }) => {
    console.log(data);

    const cardVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.05, transition: { duration: 0.3 } },
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
        >
            <div className="bg-black text-white border-2 border-gray-700 rounded-lg p-4">
                <div className="bg-gray-200 h-48 rounded-lg">
                    {data.image && (
                        <img
                            src={data.image}
                            className="h-full w-full object-cover rounded-lg"
                            alt={data.title}
                        />
                    )}
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                    {data.tags.map((tag, index) => (
                        <div
                            key={index}
                            className="p-2 border-l-2 border-r-2 text-center rounded-lg backdrop-blur-3xl opacity-70 shadow-lg border-primary bg-slate-950"
                        >
                            {tag}
                        </div>
                    ))}
                </div>
                <div className="flex justify-between items-center mt-2">
                    <div>
                        <h2 className="text-2xl font-semibold mt-4">{data.title}</h2>
                        <p className="mt-1">{data.description}</p>
                    </div>
                    <div className="flex justify-end mt-4">
                        <button className="btn btn-circle bg-green-500 border-none transform rotate-[-40deg]">
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;