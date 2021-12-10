import React from 'react';
import { Carousel, Container, Navbar } from 'react-bootstrap';
// import images
import robot1 from './bannerImg/robot1.png'
import robot2 from './bannerImg/robot2.png'
import robot3 from './bannerImg/robot3.png'
const Banner = () => {
    return (
        <>
            {/* navbar section start and*/}
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                    <Navbar.Toggle />
                    {/* just for display */}
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Home
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* nav ends here */}
            {/* carousel section starts here */}
            <Carousel>
                {/* first slide img */}
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={robot1}
                        alt="First slide"
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
                    />
                    {/* second slide message */}

                    <Carousel.Caption>
                        <h3 className='text-dark fw-bold fs-2'>Intelligence In Action</h3>
                        <p className='text-dark fs-3'>Power of Applied Intelligence!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={robot3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Robotics & Technology Services</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* carousel section ends here */}

        </>
    );
};

export default Banner;