import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import pic 
import footImg from './footerImg.png'
import facebook from './facebook.gif'
import insta from './insta.gif'
import tweet from './tweeter.png'

// import styleseet
import './footer.css'
const Footer = () => {
    return (
        <Container fluid className='footer '>
            <Row className='mt-5 pt-5'>
                {/*  footer img */}
                <Col xs={12} md={4} className='social ps-5'>
                    <img src={footImg} alt="" height='100' width='100' />
                </Col>
                <Col xs={12} md={6}>
                    <Row >
                        {/* footer notes */}
                        <Col xs={12} md={6} className='mb-5'>
                            <p className='fw-bold fs-4'>About us</p>
                            <p className='fw-bold fs-4'>Our Services</p>
                            <p className='fw-bold fs-4'>Cell:+880-129423954</p>
                        </Col>

                    </Row>
                </Col>


            </Row>

        </Container>
    );
};

export default Footer;