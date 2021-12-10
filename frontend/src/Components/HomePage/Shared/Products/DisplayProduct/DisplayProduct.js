import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './display.css'
const DisplayProduct = ({ product, btnAction }) => {
    // destructuring properties from product
    const { image, name, material, price, stock, createdAt } = product;
    // setting date format into Date-month-year
    let date = new Date(createdAt);
    let day = ("0" + date.getDate()).slice(-2)
    let month = ("0" + (date.getMonth() + 1)).slice(-2)
    let dateMDY = `${day}-${month}-${date.getFullYear()}`;

    return (
        <Col>
            <Card className="text-center card cardBG">
                {/* robot image */}
                <div className="image-box">
                    <Card.Img variant="top" src={image} className='image' />
                </div>
                <Card.Body>
                    {/* robot details */}
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Price: ฿{price}</Card.Text>
                    <Card.Text>Stock: {stock}</Card.Text>
                    <Card.Text>Date: {dateMDY}</Card.Text>
                    <Button onClick={() => btnAction(name)} variant="primary">Add to cart</Button>
                </Card.Body>
                <Card.Footer className=" text-light">{material}</Card.Footer>
            </Card>
        </Col>
    );
};

export default DisplayProduct;