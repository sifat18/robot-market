import React from 'react';
import { Container, Table } from 'react-bootstrap';
import './showcart.css'
const ShowCartProduct = ({ product, remove, add }) => {
    return (

        <Container className='producttable mt-2'>
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
                                <td className='text-light text-center'>{(data?.price * data.quantity).toFixed(2)}</td>
                                <td className='text-light text-center'><span className='pointer' onClick={() => remove(data)}><i className={!data?.quantity ? `disabled` : "far fa-minus-square"}></i></span> {data?.quantity} <span className='pointer' onClick={() => add(data)}><i className={!data?.stock ? `disabled` : 'far fa-plus-square'}></i></span></td>
                            </tr>
                        </tbody>

                    ))
                    }
                </Table> : ''}

        </Container>

    );
};

export default ShowCartProduct;