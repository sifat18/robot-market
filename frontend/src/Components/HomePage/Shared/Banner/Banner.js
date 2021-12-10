import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
            {/* navbar section start*/}
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
        </>
    );
};

export default Banner;