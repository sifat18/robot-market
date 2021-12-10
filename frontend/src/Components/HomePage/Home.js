import React from 'react';
import useRobotData from '../CustomHook/dataload';
import Banner from './Shared/Banner/Banner';

const Home = () => {
    const [robotData, setrobotData] = useRobotData()
    return (
        <>
            <Banner />
            <h1>Robot Market</h1>

        </>
    );
};

export default Home;