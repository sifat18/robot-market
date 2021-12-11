import React from 'react';
import { Container, Table } from 'react-bootstrap';
// import useCart from '../../../CustomHook/CartData';

const ShowCartProduct = ({ product, remove, add }) => {
    // const [cart] = useCart(product)
    return (

        <Container className=''>
            {/* display if product exists */}
            {product.length ?
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
                    {product.map(data => (
                        <tbody >

                            <tr key={data.name}>
                                <td className='text-light text-center'>{data?.name}</td>
                                <td className='text-light text-center'>{data?.price * data.quantity}</td>
                                <td className='text-light text-center'><span className={data.quantity ? '' : 'disabled'} onClick={() => remove(data)}><i className={!data?.quantity ? `disabled` : "far fa-minus-square"}></i></span> {data?.quantity} <span onClick={() => add(data)}><i className={!data?.stock ? `disabled` : 'far fa-plus-square'}></i></span></td>
                            </tr>
                        </tbody>

                    ))
                    }
                </Table> : ''}

        </Container>

    );
};

export default ShowCartProduct;