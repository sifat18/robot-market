import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useCart from '../../../CustomHook/CartData';
import { addToDb } from '../../../LocalStorage/local';
import Cart from '../Cart/Cart';
import ShowCartProduct from '../ShowCartProduct/ShowCartProduct';
import DisplayProduct from './DisplayProduct/DisplayProduct';
// stylesheet
import './product.css'
const Shop = ({ productData, setData }) => {
    // setting display data state
    const [displayRobot, setDisplayRobot] = useState([])

    // setting  cart data state
    const [cart, setCart] = useCart(productData)


    // re rendering when search is reset  
    useEffect(() => {
        setDisplayRobot(productData);
    }, [productData]);

    // add to cart function for storaging locally
    const handleAddToCart = (product) => {
        if (product.stock > 0) {
            product.stock = product.stock - 1;
        }
        let newCart = [];
        const exists = cart.find(robot => robot.name === product.name);
        if (exists) {
            const rest = cart.filter(data => data.name !== product.name);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        } else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(product.name);
    }

    // search function filter
    const handlesearch = event => {
        // getting text value
        let text = event.target.value;
        // filtering the material type
        let result = productData.filter(robots => robots.material.toLowerCase().includes(text.toLowerCase()))
        // setting to display
        setDisplayRobot(result);
        // testing
        // console.log(result)
    }
    return (
        <div className='bg-color'>
            {/* search div  */}
            <div className="searchDiv h-25 py-4 ">
                <h2 className='fs-2 fw-bold text-light mt-3'>Search</h2>
                <input className='search w-50' onChange={handlesearch} placeholder='Search by materials' type="text" name="search" id="search" />
            </div>
            {/* dividing display into product and cart */}
            <Container fluid className='mt-5'>
                {/* creating row column */}
                <Row>
                    {/* product column  */}
                    <Col xs={8}>
                        <Row xs={1} md={2} lg={3} className="g-4">
                            {displayRobot.map((data, index) => <DisplayProduct key={index} btnAction={handleAddToCart} product={data} />)}
                        </Row>
                    </Col>
                    {/* cart column */}
                    <Col xs={4}>
                        <Cart cartData={cart} />
                        <ShowCartProduct product={cart} />

                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Shop;