import React from 'react';
import useRobotData from '../CustomHook/dataload';
import Banner from './Shared/Banner/Banner';
import Products from './Shared/Products/Products';

const Home = () => {
    const [robotData, setrobotData] = useRobotData()
    return (
        <>
            <Banner />
            <Products />
        </>
    );
};

export default Home;