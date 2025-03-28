import React from 'react';
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram, FaYoutube } from 'react-icons/fa';
import circle from '../../assets/Frame 1171276207.png';
import Marque from '../shared/Marque';

const ContactUs = () => {
    return (
        <section className='bg-black mt-10 md:mt-20 relative '>
            <div className='w-10/12 mx-auto py-20'>
                <div className='flex items-center gap-2'>
                    <hr className='w-6 h-1 bg-primary border-0' />
                    <h1 className='text-white font-semibold text-lg md:text-xl'>Contact Us</h1>
                </div>
                <h1 className='text-2xl md:text-3xl mt-1 text-white font-bold'>Join Us in Creating</h1>
                <p className='text-3xl md:text-4xl font-bold text-primary'>Something Great</p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-10'>
                    {/* Form Section */}
                    <div className='mt-10'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <input type="text" placeholder="First Name *" className='bg-gray-800 p-2 rounded text-white' />
                            <input type="text" placeholder="Last Name *" className='bg-gray-800 p-2 rounded text-white' />
                            <input type="email" placeholder="Email *" className='bg-gray-800 p-2 rounded text-white col-span-2 md:col-span-1' />
                            <input type="tel" placeholder="Phone Number *" className='bg-gray-800 p-2 rounded text-white col-span-2 md:col-span-1' />
                            <input type="text" placeholder="Subject *" className='bg-gray-800 p-2 rounded text-white col-span-2' />
                            <textarea placeholder="Message *" className='bg-gray-800 p-2 rounded text-white col-span-2' rows="4"></textarea>
                        </div>
                        <button className='bg-primary text-black font-semibold px-6 py-2 rounded mt-4 flex items-center gap-2'>
                            Send Message <span className='text-white'>+</span>
                        </button>
                    </div>

                    {/* Address & Contact Section */}
                    <div className='bg-primary p-6 rounded mt-10'>
                        <h2 className='text-black font-bold text-lg'>Address</h2>
                        <p className='text-black'>4517 Washington Ave. Manchester, Kentucky 39495</p>

                        <h2 className='text-black font-bold text-lg mt-4'>Contact</h2>
                        <p className='text-black'>Phone: +0123-456-789</p>
                        <p className='text-black'>Email: example@gmail.com</p>

                        <h2 className='text-black font-bold text-lg mt-4'>Open Time</h2>
                        <p className='text-black'>Monday - Friday : 10:00 - 20:00</p>

                        <h2 className='text-black font-bold text-lg mt-4'>Stay Connected</h2>
                        <div className='flex gap-4 mt-2'>
                            <FaFacebook className='text-black text-2xl' />
                            <FaTwitter className='text-black text-2xl' />
                            <FaPinterest className='text-black text-2xl' />
                            <FaInstagram className='text-black text-2xl' />
                            <FaYoutube className='text-black text-2xl' />
                        </div>
                    </div>
                </div>

                {/* Circle Logo */}
                <div className='hidden md:block absolute top-16 right-0'>
                    {/* circle-1 */}
                    <div className='hidden md:block w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full bg-primary absolute'></div>
                    {/* circle-2 */}
                    <div className='hidden md:block z-1 relative md:ml-20 lg:mr-36' style={{ position: 'relative', width: '155px', height: '155px' }}>
                        <img className='w-[155px]' src={circle} alt="Circle Logo" />
                    </div>
                </div>

            </div>
            <Marque />
        </section>
    );
};

export default ContactUs;
