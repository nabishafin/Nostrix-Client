import React from 'react';
import Heading from '../shared/Heading';
import { FaStar } from 'react-icons/fa';
import pic from '../../assets/client-pic.webp';
import semiclone from '../../assets/semi-clone.png'
import { useGetTestimonialsQuery } from '../../redux/features/testimonials/testimonialsApi';

const Testimonials = () => {
    const { data: testimonials = [], isLoading } = useGetTestimonialsQuery();

    // Default testimonial data if database is empty
    const defaultTestimonial = {
        clientName: "Mahamodon Nabi Shafin",
        designation: "CEO, Nostrix Creative",
        review: "Our mission is to empower businesses with cutting-edge digital solutions. We take immense pride in the success stories of our clients and their satisfaction is our ultimate reward.",
        rating: 5,
        image: pic
    };

    if (isLoading) return <div className="flex justify-center p-10"><span className="loading loading-spinner text-[#20D374]"></span></div>;

    // Use the first testimonial from DB if available, otherwise use default
    const activeTestimonial = testimonials.length > 0 ? testimonials[0] : defaultTestimonial;

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
                                src={activeTestimonial.image || pic}
                                className='object-cover w-full h-full rounded-full'
                                alt={activeTestimonial.clientName}
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
                            {[...Array(activeTestimonial.rating || 5)].map((_, i) => (
                                <FaStar key={i} size={20} className="text-[#FCAF23]" />
                            ))}
                            <span className='text-2xl md:text-2xl ml-2 font-bold'>{(activeTestimonial.rating || 5).toFixed(1)}</span>
                        </div>
                        <p className='mt-3 text-lg md:text-lg italic'>
                            "{activeTestimonial.review}"
                        </p>
                        <h4 className='mt-4 text-3xl md:text-4xl font-bold'>{activeTestimonial.clientName}</h4>
                        <p className='mt-1 text-lg'>{activeTestimonial.designation}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;