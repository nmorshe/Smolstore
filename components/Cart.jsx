'use client'

import { useProducts } from "@/context/ProductContext";
import Link from "next/link";

const Cart = () => {

    const {cart} = useProducts();
    const numProducts = Object.keys(cart).reduce((acc, curr, index) => {
        const numProduct = cart[curr].quantity
        const sum = acc + parseInt(numProduct)
        return sum
    }, 0)

    return (
        <div>
            <Link className="unstyled-button" href={'/cart'}>
                <i className="fa-solid fa-sack-dollar"></i>
                { numProducts > 0 && (
                    <div className="cart-num">
                        <p>{numProducts}</p>
                    </div>)}
            </Link>
        </div>
    )
}

export default Cart;