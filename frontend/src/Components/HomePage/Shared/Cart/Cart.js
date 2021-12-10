import React from 'react';

const Cart = () => {
    return (
        <div class="cart" id="my-cart">
            <table class="table">
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
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Cart;