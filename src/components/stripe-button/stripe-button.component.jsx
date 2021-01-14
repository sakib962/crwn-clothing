import { React } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51I9Sb4HXxxCGX8QRjKqiswULGGn9fP0MAjc04MenlKKjjhJD5eHffBFT4uDPvcgAFRXHdP2RHce03Ogl0PPDz1l700C6fs6HQL';

  const onToken = (token) => {
    console.log(token)
    alert('Payment Successful')
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='Crwn Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;