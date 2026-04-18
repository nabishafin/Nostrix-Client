import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaStarOfLife } from 'react-icons/fa';

const Marque = () => {
    return (
        <div className='bg-[#20D374] py-5 overflow-hidden border-y border-black/5'>
            <Marquee speed={50} gradient={false} pauseOnHover={true}>
                <div className='flex items-center space-x-12 whitespace-nowrap px-4 font-bold text-[#111827] uppercase tracking-wider text-sm md:text-base'>
                    <span>Website Design</span>
                    <FaStarOfLife className="text-[10px]" />
                    <span>UX/UI Design</span>
                    <FaStarOfLife className="text-[10px]" />
                    <span>Mobile Application Development</span>
                    <FaStarOfLife className="text-[10px]" />
                    <span>Digital Marketing</span>
                    <FaStarOfLife className="text-[10px]" />
                    <span>Graphics Design</span>
                    <FaStarOfLife className="text-[10px]" />
                    <span>Custom Software</span>
                    <FaStarOfLife className="text-[10px]" />
                </div>
            </Marquee>
        </div>
    );
};

export default Marque;