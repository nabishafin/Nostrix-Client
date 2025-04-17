// import React from 'react';
// import { FaArrowRight } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// const ProjectCard = ({ data, bgcolor, textColor, categorybg, border, borderColor }) => {
//     console.log(data);

//     const cardVariants = {
//         initial: { scale: 1 },
//         hover: { scale: 1.05, transition: { duration: 0.3 } },
//     };

//     return (
//         <motion.div
//             variants={cardVariants}
//             initial="initial"
//             whileHover="hover"
//         >
//             <div
//                 className={`${textColor} border-gray-700   rounded-lg p-4 ${bgcolor} border ${border} ${borderColor} `} // Fixed height
//             >
//                 <div className="bg-gray-200 rounded-lg">
//                     {data.image && (
//                         <img
//                             src={data.image}
//                             className="h-80 w-full object-cover rounded-lg content-center"
//                             alt={data.title}
//                         />
//                     )}
//                 </div>
//                 <div className="flex flex-wrap gap-1 mt-4">
//                     {data.tags.map((tag, index) => (
//                         <div
//                             key={index}
//                             className={`px-2 py-1 text-xs border-l-2 border-r-2 text-center rounded-3xl shadow-lg border-primary ${categorybg}`}
//                         >
//                             {tag}
//                         </div>
//                     ))}
//                 </div>
//                 <div className="flex justify-between items-center  flex-1">
//                     <div className="flex-1">
//                         <h2 className="text-xl font-semibold mt-1">{data.title}</h2>
//                         {/* Truncate text */}
//                         <p className="mt-1 line-clamp-3 ">{data.description}</p> {/* Truncate after 3 lines */}
//                     </div>
//                     <div className="flex justify-end mt-4">
//                         <button className="btn btn-circle bg-green-500 border-none transform rotate-[-40deg]">
//                             <FaArrowRight />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </motion.div>
//     );
// };

// export default ProjectCard;



import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectCard = ({ data, bgcolor, textColor, categorybg, border, borderColor }) => {
    const cardVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.05, transition: { duration: 0.3 } },
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            className="h-full" // Ensure motion div takes full height
        >
            <div
                className={`${textColor} border-gray-700 rounded-lg p-4 ${bgcolor} border ${border} ${borderColor} h-full flex flex-col`}
            >
                {/* Image section - fixed height */}
                <div className="bg-gray-200 rounded-lg flex-shrink-0">
                    {data.image && (
                        <img
                            src={data.image}
                            className="h-48 md:h-60 w-full object-cover rounded-lg"
                            alt={data.title}
                        />
                    )}
                </div>

                {/* Tags section */}
                <div className="flex flex-wrap gap-1 mt-4 flex-shrink-0">
                    {data.tags.map((tag, index) => (
                        <div
                            key={index}
                            className={`px-2 py-1 text-xs border-l-2 border-r-2 text-center rounded-3xl shadow-lg border-primary ${categorybg}`}
                        >
                            {tag}
                        </div>
                    ))}
                </div>

                {/* Content section - grows to fill space */}
                <div className="flex flex-col flex-grow mt-2">
                    <h2 className="text-xl font-semibold">{data.title}</h2>
                    {/* Description with flexible growth */}
                    <p className="mt-2 line-clamp-3 flex-grow">{data.description}</p>

                    {/* Button at bottom */}
                    <div className="flex justify-end mt-4">
                        <button className="btn btn-circle bg-green-500 border-none transform rotate-[-40deg] hover:bg-green-600">
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;

