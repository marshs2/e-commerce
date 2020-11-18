import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HonHXDE2YdmQY015PXFoAMF8P6fyYu3C3Hw4qBqqSoRxS7bqz4zuxN0xujsxlp10gkmZ9PMrzCKolbEKfrtBk8t008XRlvWMS'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='God is Good Application Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUZ.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;