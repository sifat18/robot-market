import React from 'react';
import './cart.css'
const Cart = () => {
    return (
        <div className='ms-5'>
            <div className="cart " id="my-cart">
                <table className="table text-white" fixed='top'>
                    {/* <!-- table header --> */}
                    <thead>
                        <h1>My-Cart</h1>

                    </thead>
                    <tbody>
                        <tr>
                            {/* <!-- product count --> */}
                            <th>Total Added-Products:</th>
                            <td><span id="total-Products">0</span></td>
                        </tr>
                        <tr>
                            {/* <!-- product price --> */}
                            <th>Price:</th>
                            <td>$ <span id="price">0</span></td>
                        </tr>
                        <tr>
                            {/* <!-- total --> */}
                            <th scope="row">Total</th>
                            <td colspan="2">$ <span id="total">0</span></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;