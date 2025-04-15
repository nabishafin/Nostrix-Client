import React from 'react';
import ContactUs from '../../components/ui/ContactUs';
import PageBanner from '../../components/shared/PageBanner';

const ContactPage = () => {
    return (
        <section>
            <PageBanner
                title={'Contact Us'}
                subtitle={'Contact Us'}
            />
            <div className='md:w-10/12 w-full px-4 md:px-0 mx-auto'>
                <ContactUs
                    bg={'bg-white'}
                    textColor={'text-black'}
                    bginput={'bg-[#F5F5F5]'}
                    bgCircle={'bg-black'}
                />
            </div>


            {/* Map Section */}
            <div className='w-full h-[400px] mt-10'>
                <iframe
                    className='w-full h-full border-0'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902123456789!2d91.123456!3d23.456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f123456789ab%3A0xabcdef1234567890!2sShashongacha%2C%20Cumilla%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1610000000000!5m2!1sen!2sbd"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>



            {/* Niche Section */}
            <div className='mt-20 md:w-10/12 w-full px-4 md:px-0 mx-auto text-center'>
                <h2 className='text-3xl font-bold mb-4'>Need Help or Have Questions?</h2>
                <p className='text-lg text-gray-600 mb-6'>
                    We’re here to assist you with anything you need. Whether you have a question about features, pricing, or anything else — our team is ready to answer all your questions.
                </p>
                <a
                    href='mailto:support@example.com'
                    className='inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-gray-800 transition'
                >
                    Get Support
                </a>
            </div>

        </section>
    );
};

export default ContactPage;
