const FAQPage = () => {

    return (
        <div className="faq-content">

            <h4>Frequently Asked Questions:</h4>

            <hr />

            <h6>What payment methods are available?</h6>
            <p>
                This site accepts CashApp, Klarna,
                and AmazonPay as online payment methods,
                as well as standard credit cards such as 
                Visa, Discovery, and American Express.
            </p>

            <hr />
            
            <h6>How do I add items to my cart?</h6>
            <p>
                Click on the add to cart button located
                typically underneath the object description of
                each available item in the Home page.
            </p>

            <hr />
            
            <h6>How do I remove items from my cart?</h6>
            <p>
                Click on the cart icon (top right) to access
                the cart menu, then set one of the items to 0 to delete it from
                your cart.
            </p>

            <hr />

        </div>
    )
}

export default FAQPage;