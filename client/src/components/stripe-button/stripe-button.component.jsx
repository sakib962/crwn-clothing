import { React } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51I9Sb4HXxxCGX8QRjKqiswULGGn9fP0MAjc04MenlKKjjhJD5eHffBFT4uDPvcgAFRXHdP2RHce03Ogl0PPDz1l700C6fs6HQL';

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token
      }
    }).then(response => {
      console.log(response)
      alert("Payment Successfull")
    }).catch(error => {
      console.log(error)
      alert('There was an issue with your payment! Please make sure you use the provided credit card.')
    })
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