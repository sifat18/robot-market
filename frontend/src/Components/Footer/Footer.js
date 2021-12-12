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
                <Col xs={12} md={4} className='social mb-5 ps-2 text-center'>
                    <img src={footImg} alt="" height='100' width='100' />
                </Col>
                <Col xs={12} md={6}>
                    <Row >
                        {/* footer notes */}
                        <Col xs={12} md={6} className='text-center mb-5'>
                            <p className='fw-bold fs-4'>About us</p>
                            <p className='fw-bold fs-4'>Our Services</p>
                            <p className='fw-bold fs-4'>Cell:+880-129423954</p>
                        </Col>
                        <Col xs={12} md={6} className='d-flex flex-column align-items-center justify-content-center'>
                            <p className='fw-bold fs-4'>Follow us at</p>
                            <div className='d-flex justify-content-center mt-2'>
                                <img src={facebook} alt="" height='50' width='50' />
                                <img src={tweet} alt="" height='50' width='50' />
                                <img src={insta} alt="" height='50' width='50' />
                            </div>
                        </Col>
                    </Row>
                </Col>


            </Row>

        </Container>
    );
};

export default Footer;