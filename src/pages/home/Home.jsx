import React from 'react';
import Banner from '../../components/ui/Banner';
import OurServices from '../../components/ui/OurServices';
import AboutUS from '../../components/ui/AboutUS';
import WorkProcess from '../../components/ui/WorkProcess';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <OurServices />
            <AboutUS />
            <WorkProcess />
        </div>
    );
};

export default Home;