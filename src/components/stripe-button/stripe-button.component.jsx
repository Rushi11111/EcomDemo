import React from "react";
import StripeCheckout from "react-stripe-checkout";
import {connect} from "react-redux";
import {emptyCart} from "../../redux/cart/cart.actions";
import {var_config} from "../../../config";

const StripeCheckoutButton = ({price, emptyCart}) => {
    const priceForStripe = price * 100;
    const publishableKey = var_config.StripePublishableKey

    const onToken = token => {
        emptyCart()
        alert('Payment Successful')
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