import React from 'react';
import Banner from '../../components/ui/Banner';
import OurServices from '../../components/ui/OurServices';
import AboutUS from '../../components/ui/AboutUS';
import WorkProcess from '../../components/ui/WorkProcess';
import WorkPortfolio from '../../components/ui/WorkPortfolio';
import Testimonials from '../../components/ui/Testimonials';
import NewsBlogs from '../../components/ui/NewsBlogs';
import Faq from '../../components/ui/Faq';
import ContactUs from '../../components/ui/ContactUs';


const Home = () => {
    return (
        <div className=''>
            <Banner />
            <OurServices />
            <AboutUS />
            <WorkProcess />
            <WorkPortfolio />
            <Testimonials />
            <NewsBlogs />
            <Faq />
            <ContactUs
                bg={'bg-black'}
                textColor={'text-white'}
            />
        </div>
    );
};

export default Home;