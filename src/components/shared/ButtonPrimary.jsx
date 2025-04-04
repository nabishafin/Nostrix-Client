
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ButtonPrimary = ({ text, handleClick }) => {
    return (
        <div>
            <button className="z-50 md:flex gap-2 items-center text-lg md:text-xl mt-1 text-white pr-2 rounded-3xl bg-white">
                <p className="text-lg md:text-xl text-white px-3 py-2 rounded-3xl  bg-primary">{text}</p>
                <p className='hidden md:block'>
                    <FaArrowRight size={40} className="bg-black p-2 rounded-full text-primary" />
                </p>
            </button>
        </div >
    );
};

export default ButtonPrimary;