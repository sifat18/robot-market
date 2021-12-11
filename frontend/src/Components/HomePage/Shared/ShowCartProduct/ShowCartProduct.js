import React from 'react';
import { Container, Table } from 'react-bootstrap';
import useCart from '../../../CustomHook/CartData';

const ShowCartProduct = ({ product }) => {
    const [cart] = useCart(product)
    return (

        <Container className='ms-1'>

            {cart.length ?
                <Table className='text-light' responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th>Robot Name</th>
                            <th>Price</th>
                            <th>Count</th>
                        </tr>
                    </thead>
                    {cart.map(data => (
                        <tbody >

                            <tr >
                                <td className='text-light'>{data?.name}</td>
                                <td className='text-light'>{data?.price * data.quantity}</td>
                                <td className='text-light'>{data?.quantity}</td>
                            </tr>
                        </tbody>

                    ))
                    }
                </Table> : ''}

        </Container>

    );
};

export default ShowCartProduct;