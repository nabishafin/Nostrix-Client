import React from 'react';
import ContactUs from '../../components/ui/ContactUs';
import PageBanner from '../../components/shared/PageBanner';

const ContactPage = () => {
    return (
        <section>
            <PageBanner />
            <div className='md:w-10/12 w-full px-4 md:px-0 mx-auto'>
                <ContactUs
                    bg={'bg-white'}
                    textColor={'text-black'}
                />
            </div>
            <div>

            </div>
        </section>
    );
};

export default ContactPage;