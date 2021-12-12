import { useEffect, useState } from "react"
import { getStoredCart } from "../LocalStorage/local";

const useCart = (products) => {
    // cart data state
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // checking in all products

        if (products.length) {

            // getting the storage from local
            const savedCart = getStoredCart();

            // updated product store here
            const storedCart = [];

            // checking the stored cart
            for (const name in savedCart) {

                const addedProduct = products.find(product => product.name === name);
                // console.log(addedProduct);

                if (addedProduct) {
                    // setting quantity

                    const quantity = savedCart[name];
                    addedProduct.quantity = quantity;

                    // updating cart 
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }

    }, [products]);
    // returning cart and setCart
    return [cart, setCart];
}
export default useCart;