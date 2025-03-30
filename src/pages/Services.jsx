import React from 'react';
import PageBanner from '../components/shared/PageBanner';
import Marque from '../components/shared/Marque';
import Heading from '../components/shared/Heading';
import AllServices from '../components/shared/AllServices';
import ContactUs from '../components/ui/ContactUs';
import Testimonials from '../components/ui/Testimonials';

const Services = () => {
    return (
        <section>
            <div>

                <PageBanner
                    title={'Services'}
                    subtitle={'Service Details'}

                />
                <Marque></Marque>
            </div>
            <div className='w-10/12 mx-auto'>
                <Heading
                    title={'Our Services'}
                    subtitle={'Discover Our Digital Solutions'}
                ></Heading>
                <p className='text-center mt-2'>Unlock the power of innovation with our cutting-edge digital solutions designed to enhance your business efficiency, streamline operations, and drive growth. Whether you're looking to optimize workflows, improve customer engagement, or transform your digital presence, we offer customized solutions tailored to meet your unique needs.</p>
                <AllServices />
            </div>
            <ContactUs />
            <div className=''>
                <Testimonials />
            </div>

        </section>
    );
};

export default Services;