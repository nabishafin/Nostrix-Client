import React from 'react';
import Heading from '../shared/Heading';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import workpic1 from '../../assets/p-one.png';
import workpic2 from '../../assets/p-2.png';
import workpic3 from '../../assets/p-three.png';

const WorkProcess = () => {
    return (
        <div className='mt-10 px-4 md:px-0 md:w-10/12 mx-auto'>
            <Heading
                title={'Our Work Process'}
                subtitle={'Our Working Process'}
            ></Heading>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-10 '>
                {/* card-one */}
                <motion.div
                    className="card bg-base-200 shadow-sm"
                    whileHover={{ scale: 1.05, y: -10 }} // Add hover animation
                    transition={{ duration: 0.3 }}
                >
                    <figure className="px-10 pt-10">
                        <img
                            src={workpic1}
                            alt="icon"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Research and Discovery</h2>
                        <p className='p-0 md:px-10'>Research and Discovery are fundamental processes in science, technology, and innovation that drive progress across various fields</p>
                    </div>
                </motion.div>

                {/* card-two */}
                <motion.div
                    className="card bg-base-200 shadow-sm"
                    whileHover={{ scale: 1.05, y: -10 }} // Add hover animation
                    transition={{ duration: 0.3 }}
                >
                    <figure className="px-10 pt-10">
                        <img
                            src={workpic2}
                            alt="icon"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Design and Prototyping</h2>
                        <p>Design and prototyping are essential steps in the product development process, especially for web and app design.</p>
                    </div>
                </motion.div>

                {/* card-3 */}
                <motion.div
                    className="card bg-base-200 shadow-sm"
                    whileHover={{ scale: 1.05, y: -10 }} // Add hover animation
                    transition={{ duration: 0.3 }}
                >
                    <figure className="px-10 pt-10">
                        <img
                            src={workpic3}
                            alt="icon"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Development and Testing</h2>
                        <p>Development is the process of translating design and functionality into actual code. It involves both frontend and backend development.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default WorkProcess;
