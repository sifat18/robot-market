import React from 'react';

// importing components and hooks
import useRobotData from '../CustomHook/dataload';
import Banner from './Shared/Banner/Banner';
import Shop from './Shared/Products/Shop';

const Home = () => {
    // data fetching from custom hook
    const [robotData, setrobotData] = useRobotData()
    return (
        <>
            {/* nav and carousel component */}
            <Banner />

            {/* component for displaying cart and products*/}
            <Shop productData={robotData} setData={setrobotData} />
        </>
    );
};

export default Home;