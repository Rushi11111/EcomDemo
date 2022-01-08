import React from "react";
import StripeCheckout from "react-stripe-checkout";
import {connect} from "react-redux";
import {emptyCart} from "../../redux/cart/cart.actions";
import axios from "axios";

const StripeCheckoutButton = ({price, emptyCart}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KDuN1SHW8voN9zSC8kXQgQAyb4TR20E635mCTc7jEVkHGUWADL90mvYzMvERRNUdjjaFSv4rn5LBXNAbqAdXKQq008rTAsOnq'

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        }).then(response => {
            alert('succesful payment');
        }).catch(error => {
            console.log('Payment Error: ', error);
            alert(
                'There was an issue with your payment! Please make sure you use the provided credit card.'
            );
        });
    }
    
    return (
        <StripeCheckout
            label={'Pay Now'}
            name = 'CRWN Clothing'
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel={'Pay Now'}
            token = {onToken}
            stripeKey={publishableKey}
        />
    )
}

const mapDispatchToProps = dispatch => ({
    emptyCart: () => dispatch(emptyCart())
})

export default connect(null,mapDispatchToProps)(StripeCheckoutButton);