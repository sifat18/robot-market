import React from 'react';
// imports from bootstrap
import { Carousel, Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import images
import robot1 from './bannerImg/robot1.png'
import robot2 from './bannerImg/robot2.png'
import robot3 from './bannerImg/robot3.png'
import navPic from './bannerImg/robot4.png'
const Banner = () => {
    return (
        <>
            {/* navbar section start and*/}
            <Navbar bg="dark" variant="dark">
                <Container>
                    {/* logo */}
                    <NavLink to='/' className='text-decoration-none'> <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={navPic}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        ROBOT~MARKET
                    </Navbar.Brand></NavLink>
                    <Navbar.Toggle />
                    {/* just for display */}
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <NavLink to='/' className='text-decoration-none'>  Home</NavLink>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* nav ends here */}
            {/* carousel section starts here */}
            <Carousel >
                {/* first slide img */}
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={robot1}
                        alt="First slide"
                        height='700'
                    />
                    {/* first slide message */}
                    <Carousel.Caption>
                        <h3 className=' fw-bold fs-2'>WELCOME TO THE ROBOSHOP</h3>
                        <p className=' fs-3'>One Team. One Robot. Limitless Possibilities!!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    {/* second slide img */}

                    <img
                        className="d-block w-100"
                        src={robot2}
                        alt="Second slide"
                        height='700'

                    />
                    {/* second slide message */}

                    <Carousel.Caption>
                        <h3 className='text-dark fw-bold fs-2'>Intelligence In Action</h3>
                        <p className='text-dark fs-3'>Power of Applied Intelligence!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* third slide image */}

                    <img
                        className="d-block w-100"
                        src={robot3}
                        height='700'
                        alt="Third slide"
                    />
                    {/* third slide message */}

                    <Carousel.Caption>
                        <h3 className='fs-2 fw-bold'>Robotics & Technology</h3>
                        <p className='fs-3'>Combining Science with Metal and Machining</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* carousel section ends here */}

        </>
    );
};

export default Banner;