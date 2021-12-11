import React from 'react';
import { Container, Table } from 'react-bootstrap';
import useCart from '../../../CustomHook/CartData';

const ShowCartProduct = ({ product }) => {
    const [cart] = useCart(product)
    return (

        <Container className=''>
            {/* display if cart exists */}
            {cart.length ?
                <Table className='text-light' responsive striped bordered hover>
                    <thead>
                        {/* table headers */}
                        <tr>
                            <th className='text-center'>Robot Name</th>
                            <th className='text-center'>Price</th>
                            <th className='text-center'>Count</th>
                        </tr>
                    </thead>

                    {/*carts products display  */}
                    {cart.map(data => (
                        <tbody >

                            <tr key={data.name}>
                                <td className='text-light text-center'>{data?.name}</td>
                                <td className='text-light text-center'>{data?.price * data.quantity}</td>
                                <td className='text-light text-center'>{data?.quantity}</td>
                            </tr>
                        </tbody>

                    ))
                    }
                </Table> : ''}

        </Container>

    );
};

export default ShowCartProduct;