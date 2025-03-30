import React from 'react';
import Marquee from 'react-fast-marquee';

const PageBanner = ({ title, subtitle }) => {
    return (
        <div className='bg-black h-72 flex justify-center items-center flex-col '>
            <div className='mb-10'>
                <h1 className='text-4xl text-white font-bold text-center'>{title}</h1>
                <h4 className='mt-1 text-white text-center'>Home / <span className='text-primary'>{subtitle}</span></h4>
            </div>
            <Marquee />
        </div>
    );
};

export default PageBanner;