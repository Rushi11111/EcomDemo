import React from "react";

import './checkout.styles.scss';
import {connect} from 'react-redux';
import {selectCartItems} from "../../redux/cart/cart.selector";
import {selectCartTotal} from "../../redux/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkpout-item.component";


const CheckoutPage = ({cartItems, cartTotal}) => {
    return (
        <div className={'checkout-page'}>
            <div className={'checkout-header'}>
                <div className={'header-block'}>
                <span>
                    Product
                </span>
                </div>
                <div className={'header-block'}>
                <span>
                    Description
                </span>
                </div>
                <div className={'header-block'}>
                <span>
                    Quantity
                </span>
                </div>
                <div className={'header-block'}>
                <span>
                    Price
                </span>
                </div>
                <div className={'header-block'}>
                <span>
                    Remove
                </span>
                </div>
            </div>

            {
                cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} item = {cartItem}/>))
            }
            <div className={'total'}>
                TOTAL: ${cartTotal}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
    cartTotal : selectCartTotal(state)
})

export default connect(mapStateToProps)(CheckoutPage);