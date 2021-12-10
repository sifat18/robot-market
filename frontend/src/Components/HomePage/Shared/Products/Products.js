import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// stylesheet
import './product.css'
const Products = () => {
    return (
        <>
            {/* search div  */}
            <div className="searchDiv h-25 py-4 ">
                <h2 className='fs-2 fw-bold text-light mt-3'>Search</h2>
                <input className='search' placeholder='Search by materials' type="text" name="search" id="search" />
            </div>
            {/* dividing display into product and cart */}
            <Container fluid>
                {/* creating row column */}
                <Row>
                    {/* product column  */}
                    <Col xs={7}>
                        <Row>

                        </Row>
                    </Col>
                    {/* cart column */}
                    <Col xs={5}>

                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Products;