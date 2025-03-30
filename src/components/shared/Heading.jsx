import React from 'react';

const Heading = ({ title, subtitle }) => {
    return (
        <div className='mt-5'>
            {/* Title Section */}
            <div className="flex items-center gap-2 justify-center">
                <hr className="w-6 h-1 bg-primary border-0" />
                <h1 className="text-black font-semibold text-xl md:text-2xl">{title}</h1>
            </div>

            {/* Subtitle Section */}
            <h1 className='text-3xl md:text-5xl font-bold text-black text-center mt-1'>
                {subtitle}
            </h1>
        </div>
    );
};

export default Heading;
