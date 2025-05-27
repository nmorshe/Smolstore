import Stripe from "stripe"

const API_KEY = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY
const stripe = new Stripe(API_KEY, {
    apiVersion: "2023-10-16",
})


export async function getProducts() {
    const products = await stripe.products.list({ active: true })

    // fetch all the prices that are active
    const prices = await stripe.prices.list({ active: true })

    // combine the products and their associated prices
    const combinedData = products.data.map((product) => {
        const productPrices = prices.data.filter((price) => {
            return price.product === product.id
        })

        return {
            ...product,
            prices: productPrices.map((price) => {
                return {
                    id: price.id,
                    unit_amount: price.unit_amount,
                    currency: price.currency,
                    recurring: price.recurring
                }
            })
        }
    })
    return combinedData
}
