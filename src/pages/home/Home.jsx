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
import Reveal from '../../components/shared/Reveal';
import Seo from '../../components/shared/Seo';


const Home = () => {
    return (
        <div className=''>
            <Seo
                description="Nostrix Creative is a digital agency crafting websites, UI/UX, graphics and marketing that make an impact."
            />
            <Banner />
            <Reveal><OurServices /></Reveal>
            <Reveal><AboutUS /></Reveal>
            <Reveal><WorkProcess /></Reveal>
            <WorkPortfolio />
            <Reveal><Testimonials /></Reveal>
            <NewsBlogs />
            <Reveal><Faq /></Reveal>
            <ContactUs
                bg={'bg-black'}
                textColor={'text-white'}
                bginput={'bg-gray-800'}
            />
        </div>
    );
};

export default Home;
