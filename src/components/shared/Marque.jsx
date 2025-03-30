import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaStarOfLife } from 'react-icons/fa';

const Marque = () => {
    return (
        <div>
            <div className=' bg-primary py-4 font-bold '>
                <Marquee>
                    <p className='text-black mx-10'>Website Design</p>
                    <div>
                        <FaStarOfLife />
                    </div>
                    <p className='text-black mx-10'>UX/UI Design</p>
                    <div>
                        <FaStarOfLife />
                    </div>
                    <p className='text-black mx-10'>Mobile Application Development</p>
                    <div>
                        <FaStarOfLife />
                    </div>
                    <p className='text-black mx-10'>Digital Marketing</p>
                    <div>
                        <FaStarOfLife />
                    </div>
                    <p className='text-black mx-10'>Website Design</p>
                    <div>
                        <FaStarOfLife />
                    </div>
                    <p className='text-black mx-10'>UX/UI Design</p>
                    <div>
                        <FaStarOfLife />
                    </div>
                    <p className='text-black mx-10'>Mobile Application Development</p>
                    <div>
                        <FaStarOfLife />
                    </div>
                    <p className='text-black mx-10'>Digital Marketing</p>
                    <div>
                        <FaStarOfLife />
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Marque;