import React from 'react';
import Heading from '../shared/Heading';
import { FaStar } from 'react-icons/fa';
import pic from '../../assets/client-pic.webp';
import semiclone from '../../assets/semi-clone.png'

const Testimonials = () => {
    return (
        <div className='my-10 px-4 md:px-0'>
            <Heading
                title={'Clients Testimonials'}
                subtitle={'Testimonials that Speaks to My Results'}
            />
            <div className=''>
                <div className='w-full md:w-10/12 mx-auto mt-5 md:mt-10 flex flex-col md:flex-row bg-[#F5F5F5] py-10 items-center rounded-xl'>
                    {/* Left section (image) */}
                    <div className='w-full md:w-1/2 lg:w-2/5 flex justify-center items-center mb-8 md:mb-0 relative'>
                        <div className="w-48 h-48 md:w-60 md:h-60 rounded-full">
                            <img
                                src={pic}
                                className='object-cover w-full h-full rounded-full'
                                alt="Client"
                            />
                        </div>
                        <img
                            src={semiclone}
                            className='absolute  top-4 right-20 md:right-44 w-12 md:w-16'
                            alt=""
                        />
                    </div>
                    {/* Right section (testimonial) */}
                    <div className='w-full md:w-1/2 lg:w-3/5 px-5 md:px-8 flex flex-col items-start justify-center'>
                        <div className='flex gap-1 items-center'>
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} size={20} className="text-[#FCAF23]" />
                            ))}
                            <span className='text-2xl md:text-2xl ml-2 font-bold'>5.0</span>
                        </div>
                        <p className='mt-3 text-lg md:text-lg'>
                            At <span className='text-primary'>Nostrix Creative</span>, we take immense pride in the success stories of our clients. Their satisfaction and growth are the true measures of our excellence. Here's what some of our valued partners have to say about their experience working with us:
                        </p>
                        <h4 className='mt-4 text-3xl md:text-4xl font-bold'>Dianne Russell</h4>
                        <p className='mt-1 text-lg'>Owner, Architecture Studio</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;