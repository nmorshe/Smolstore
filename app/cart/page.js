'use client'

import { useProducts } from "@/context/ProductContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

const apiEndPoint = '/api/checkout';

const CartPage = () => {

  const router = useRouter();

  const {cart, handleProduct} = useProducts();

  const createCheckout = async() => {
    try {
      
      const lineItems = Object.keys(cart).map((item, itemIndex) => {
        return {
          price: item,
          quantity: cart[item].quantity
        }
      })
      
    
      const response = await fetch(apiEndPoint, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({lineItems})
        })


      const data = await response.json();

      if (response.ok) {
        console.log(data);

        router.push(data.url);
      }
    }

    catch (err) {
      console.log('Error creating checkout: ', err.message);
    }
  }

  const subtotal = Object.keys(cart).reduce((acc, curr, index) => {
    const amt = cart[curr].quantity
    const val = cart[curr].prices[0].unit_amount / 100
    const sum = acc + (val * amt)
    return sum
  }, 0)

  return (
    <section className="cart-section">
      <h2>Your Cart</h2>

      {Object.keys(cart).length === 0 && (<p>No items in cart.</p>)}

      <div className="cart-container">
        {Object.keys(cart).map((item, itemIndex) => {

          const itemData = cart[item]
          const itemQuantity = itemData?.quantity

          const imgName = itemData.name === 'Medieval Dragon Month Planner' ? 
            'planner' :
            itemData.name.replaceAll(' Sticker.png', '').replaceAll(' ', '_')
            const imgUrl = 'low_res/' + imgName + '.jpeg'

          return (
            <div key={itemIndex} className="cart-item">
              <img src={imgUrl} alt={imgName + '-img'} />
              <div>
                <h3>{itemData.name}</h3>
                <p>
                  {itemData.description.slice(0, 100)}
                  {itemData.description.length > 100 ? '...' : ''}
                </p>
                <h4>{itemData.prices[0].unit_amount / 100}</h4>
                <div className="quantity-container">
                  <p><strong>Quantity</strong></p>
                  <input type="number" value={itemQuantity} placeholder="2" onChange={(e) => {
                    const newVal = e.target.value


                    handleProduct(itemData.default_price, newVal, itemData, true)
                  }} />
                </div>
              </div>
            </div>
          )
        })}

        <div>
          <h3>Total: ${Math.floor(subtotal * 100) / 100}</h3>
        </div>
      </div>
      <div className="checkout-container">
        <Link href={'/'}>
          <button>&larr; Continue shopping</button>
        </Link>
        <button onClick={createCheckout}>Checkout &rarr;</button>
      </div>
    </section>
  );
}

export default CartPage;
