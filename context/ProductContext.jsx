'use client'

import { createContext, useContext, useState } from "react";

// Initializes context variable to use as a jsx tag.
const ProductContext = createContext();

const ProductsProvider = ({children}) => {

    // Global State
    const [cart, setCart] = useState({});

    /* Handler functions - accessible globally */

    const handleProduct = (price_id, qty, data, noIncrement=false) => {
        const newCart = {
            ...cart
        }

        if (price_id in cart) {

            // If product exists in cart, increment/decrement it.
            //newCart[price_id] = newCart[price_id] + qty;


            newCart[price_id] = {
                ...data,
                quantity: noIncrement ? qty : newCart[price_id]?.quantity + qty
            }
            // If newCart[price_id] == 0, delete it.
        }

        else {

            // Add product to cart if not found.
            newCart[price_id] = {
                ...data,
                quantity: qty
            }
        }

        if (parseInt(newCart[price_id].quantity) <= 0){

            // If the quantity is 0, the product is effectively removed.
            delete newCart[price_id];
        }

        // Update cart state with new cart object.
        setCart(newCart);
    }


    // Wrapping elements intended to be global in value
    // to store into context tags.
    const value = {
        cart,
        handleProduct
    }

    

    return (

        // JSX tag of the context - wraps around all child components.
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductsProvider;

// Custom utility hook - eases access to the global context.
// Allows you to access the value variable when called,
// which contains the global state.
export const useProducts = () => useContext(ProductContext);