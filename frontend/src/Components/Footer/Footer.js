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


            </Row>

        </Container>
    );
};

export default Footer;