import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DisplayProduct from './DisplayProduct/DisplayProduct';
// stylesheet
import './product.css'
const Shop = ({ productData }) => {
    return (
        <div className='bg-color'>
            {/* search div  */}
            <div className="searchDiv h-25 py-4 ">
                <h2 className='fs-2 fw-bold text-light mt-3'>Search</h2>
                <input className='search' placeholder='Search by materials' type="text" name="search" id="search" />
            </div>
            {/* dividing display into product and cart */}
            <Container fluid className='mt-5'>
                {/* creating row column */}
                <Row>
                    {/* product column  */}
                    <Col xs={8}>
                        <Row xs={1} md={2} lg={3} className="g-4">
                            {productData.map(data => <DisplayProduct product={data} />)}
                        </Row>
                    </Col>
                    {/* cart column */}
                    <Col xs={4}>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Shop;