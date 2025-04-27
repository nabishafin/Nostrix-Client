import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram, FaYoutube, FaArrowRight } from 'react-icons/fa';
import hireusImg from '../../assets/HireUs png.png';

const ContactUs = ({ bg, textColor, bginput, bgCircle }) => {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_ulc9cze',     // 🔁 Replace this
            'template_eu3xc8l',    // 🔁 Replace this
            formRef.current,
            'JrivHisIqegdsO58N'      // 🔁 Replace this
        ).then((result) => {
            alert('Message sent successfully!');
            console.log(result.text);
            formRef.current.reset(); // Clear the form
        }).catch((error) => {
            alert('Something went wrong. Please try again.');
            console.error(error);
        });
    };

    return (
        <section className={`${bg} mt-10 md:mt-20 relative`}>
            <div className='md:w-10/12 px-4 mx-auto py-20'>
                <div className='flex items-center gap-2'>
                    <hr className='w-6 h-1 bg-primary border-0' />
                    <h1 className={`font-semibold text-lg md:text-xl ${textColor}`}>Contact Us</h1>
                </div>
                <h1 className={`text-2xl md:text-3xl mt-1 ${textColor} font-bold`}>Join Us in Creating</h1>
                <p className='text-3xl md:text-4xl font-bold text-primary mt-2'>Something Great</p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-10'>
                    {/* Form Section */}
                    <form ref={formRef} onSubmit={sendEmail} className="mt-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input name="first_name" type="text" placeholder="First Name *" className={`${bginput} p-3 rounded ${textColor} w-full`} required />
                            <input name="last_name" type="text" placeholder="Last Name *" className={`${bginput} p-3 rounded ${textColor} w-full`} required />
                            <input name="email" type="email" placeholder="Email *" className={`${bginput} p-3 rounded ${textColor} w-full`} required />
                            <input name="phone" type="tel" placeholder="Phone Number *" className={`${bginput} p-3 rounded ${textColor} w-full`} />
                            <input name="subject" type="text" placeholder="Subject *" className={`${bginput} p-3 rounded ${textColor} w-full md:col-span-2`} required />
                            <textarea name="message" placeholder="Message *" className={`${bginput} p-3 rounded ${textColor} w-full md:col-span-2`} rows="4" required></textarea>
                        </div>

                        {/* Button section */}
                        <div className="mt-4 flex justify-center md:justify-start">
                            <button type="submit" className="flex gap-2 items-center text-lg md:text-xl pr-2 rounded-3xl bg-white">
                                <p className={`text-lg md:text-xl ${textColor} px-4 py-2 rounded-3xl bg-primary`}>
                                    Send Message
                                </p>
                                <FaArrowRight size={30} className="bg-black p-2 rounded-full text-primary" />
                            </button>
                        </div>
                    </form>

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
                <div className='hidden md:block absolute top-16 right-7'>
                    <div className='hidden md:block mr-8 w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full bg-primary absolute'></div>
                    <div className='hidden md:block z-1 relative md:ml-20 lg:mr-36' style={{ position: 'relative', width: '155px', height: '155px' }}>
                        <img className={`w-[155px] rotating-image ${bgCircle} backdrop-blur-2xl rounded-full`} src={hireusImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
