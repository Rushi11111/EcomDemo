import React from "react";

import './checkout.styles.scss';
import {connect} from 'react-redux';
import {selectCartItems} from "../../redux/cart/cart.selector";
import {selectCartTotal} from "../../redux/cart/cart.selector";

const CheckoutPage = ({cartItems, cartTotal}) => (
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

        {/*{*/}
        {/*    cartItems.map(cartItem => (<div>cartItem.name</div>))*/}
        {/*}*/}
        <div className={'total'}>
            TOTAL: ${cartTotal}
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
    cartTotal : selectCartTotal(state)
})

export default connect(mapStateToProps)(CheckoutPage);