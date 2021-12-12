import React, { useEffect, useState } from 'react';
import { Col, Container, Modal, Row, Button } from 'react-bootstrap';

import useCart from '../../../CustomHook/CartData';
// function imported from local
import { addToDb, deleteFromDb } from '../../../LocalStorage/local';

// imported components 
import Cart from '../Cart/Cart';
import ShowCartProduct from '../ShowCartProduct/ShowCartProduct';
import DisplayProduct from './DisplayProduct/DisplayProduct';
// stylesheet
import './product.css'

const Shop = ({ productData, setData }) => {
    // setting display data state
    const [displayRobot, setDisplayRobot] = useState([])

    // creating a set for storing unique materials 
    const [uniqueMaterial, setUniqueMaterial] = useState([])

    // bootstrap modal display condition state
    const [show, setShow] = useState(false);

    // modal closing and displaying function
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // setting  cart data state
    const [cart, setCart] = useCart(productData)


    // re-rendering when search is reset  
    useEffect(() => {
        setDisplayRobot(productData);
    }, [productData]);

    // remove from material array
    const removeMaterials = material => {
        // filtering out the removed material in array
        let materialExist = uniqueMaterial.filter(item => item !== material);

        // console.log(materialExist)

        setUniqueMaterial(materialExist)
    }

    // remove items from cart 
    const handleRemoveFromCart = (product) => {
        let newCart = [];
        // checking if exists
        const exists = cart.find(robot => robot.name === product.name);

        // remove 1 item from cart and add 1 to stock
        if (exists && exists?.quantity > 0) {
            const rest = cart.filter(data => data.name !== product.name);
            exists.quantity = exists?.quantity - 1;
            product.stock = product.stock + 1;

            newCart = [...rest, product];
        } else {

            // if not exist set to 1 
            product.quantity = 0;

            //calling remove material function 
            removeMaterials(product.material)

            newCart = [...cart, product];
        }
        // remove from localstorage
        deleteFromDb(product.name);
        setCart(newCart);

    }

    // check material
    const checkMaterials = material => {
        console.log(`adding ${material}`)

        // if not exists insert into array
        let materialExist = uniqueMaterial.indexOf(material);
        let newMaterials = [];

        // if no match then add to array
        if (materialExist === -1) {
            newMaterials = [...uniqueMaterial, material]
            setUniqueMaterial(newMaterials)

        } else {
            // printing if alredy in array
            console.log('already exists')
        }
    }

    // add to cart function for storaging locally
    const handleAddToCart = (product) => {
        //    check material
        checkMaterials(product.material)
        // console.log(uniqueMaterial)

        // if added 5 unique materials then return modal
        if (uniqueMaterial.length === 4) {
            handleShow()
            return
        }

        // reducing stock on each click
        if (product.stock > 0) {
            product.stock = product.stock - 1;
        }


        let newCart = [];

        // checking if the product is already added
        const exists = cart.find(robot => robot.name === product.name);
        if (exists) {
            // increasing quantity of existing product
            const rest = cart.filter(data => data.name !== product.name);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        } else {

            // if not exist set to 1 
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
        <div className='bg-color pb-5'>
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
                        {/* component that shows total amounts */}
                        <Cart cartData={cart} />

                        {/* component that shows selected products */}
                        <ShowCartProduct product={cart} remove={handleRemoveFromCart} add={handleAddToCart} />

                    </Col>
                </Row>
            </Container>

            {/* when 5 unique robots added display this  */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    {/* modal header */}
                    <Modal.Title>Added 5 different robots</Modal.Title>
                </Modal.Header>
                {/* modal message */}
                <Modal.Body>Can not add more!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        OKay
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
};

export default Shop;