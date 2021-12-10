import React from 'react';
import useRobotData from '../CustomHook/dataload';
import Banner from './Shared/Banner/Banner';
import Shop from './Shared/Products/Shop';

const Home = () => {
    const [robotData, setrobotData] = useRobotData()
    return (
        <>
            <Banner />
            <Shop productData={robotData} />
        </>
    );
};

export default Home;