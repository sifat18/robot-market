import React from 'react';
// cart stylesheet
import './cart.css'
const Cart = ({ cartData }) => {
    console.log(cartData)
    // setting quantity and total 
    let totalQuantity = 0;
    let total = 0;
    // setting quantity if no quantity found
    for (const product of cartData) {

        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    return (
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
            </div>
        </div>

    );
};

export default Cart;