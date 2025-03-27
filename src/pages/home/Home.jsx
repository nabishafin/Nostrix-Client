import React from 'react';
import Banner from '../../components/ui/Banner';
import OurServices from '../../components/ui/OurServices';
import AboutUS from '../../components/ui/AboutUS';
import WorkProcess from '../../components/ui/WorkProcess';
import WorkPortfolio from '../../components/ui/WorkPortfolio';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <OurServices />
            <AboutUS />
            <WorkProcess />
            <WorkPortfolio />
        </div>
    );
};

export default Home;