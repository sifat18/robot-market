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
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={robot1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>One Team. One Robot. Limitless Possibilities!! </h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={robot2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={robot3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* carousel section ends here */}

        </>
    );
};

export default Banner;