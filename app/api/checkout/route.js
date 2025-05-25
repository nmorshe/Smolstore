import Stripe from "stripe";
import '../../../envConfig.js'

const API_KEY = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY;
const stripe = new Stripe(API_KEY, {
    apiVersion: '2025-5-24'
});

export async function POST(request) {
    try {

        // Getting the line items from the request parameter.
        const {lineItems} = await request.json();
        console.log(lineItems);

        // Creating Stripe session in payment mode and adding
        // line items to it.
        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            line_items: lineItems,

            //URLs if payment is confirmed successfully or canceled.
            success_url: process.env.NEXT_PUBLIC_BASE_URL + '/success',
            cancel_url: process.env.NEXT_PUBLIC_BASE_URL + '/'
        })

        // Returning the session to the frontend
        return Response.json(session);
    }

    catch (err) {
        console.error('Error creating cart checkout: ', err.message);
        return Response.json({error: 'Failed to create cart checkout page.'});
    }
}