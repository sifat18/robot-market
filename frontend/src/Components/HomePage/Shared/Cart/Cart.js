import React from 'react';
import { Button } from 'react-bootstrap';
// cart stylesheet
import './cart.css'
const Cart = ({ cartData, clear }) => {
    // console.log(cartData)

    // initialize quantity and total 
    let totalQuantity = 0;
    let total = 0;

    // setting total quantity of products 
    for (const product of cartData) {

        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    return (
        // displaying total quantity and price
        <div className='ms-2'>
            {/* cart table */}
            <div className="cart " id="my-cart">
                <table className="table text-white" fixed='top'>
                    {/* <!-- table header --> */}
                    <thead>
                        <h1>My-Cart</h1>

                    </thead>
                    <tbody>
                        <tr>
                            {/* <!-- product count --> */}
                            <th>Total Added-Robots:</th>
                            <td><span id="total-Products">{totalQuantity}</span></td>
                        </tr>
                        <tr>
                            {/* <!-- total --> */}
                            <th scope="row">Total</th>
                            <td colSpan="2">฿ <span id="total">{total.toFixed(2)}</span></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <Button onClick={() => clear()} variant="primary" >Remove Storage</Button>
            </div>
        </div>

    );
};

export default Cart;