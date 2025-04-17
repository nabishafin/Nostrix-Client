import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const LearnMoreButton = ({ text }) => {
    return (
        <div className="hidden md:flex gap-2 items-center text-lg md:text-xl mt-1 text-white pr-2 rounded-3xl bg-white">
            <p className="text-lg md:text-xl text-white px-3 py-2 rounded-3xl bg-primary">Learn More</p>
            <p>
                <FaArrowRight size={30} className="bg-black p-2 rounded-full text-primary" />
            </p>

        </div>
    );
};

export default LearnMoreButton;