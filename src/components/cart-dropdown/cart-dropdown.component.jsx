import React from "react";
import {connect} from "react-redux";
import CustomBotton from "../custom-botton/custom-botton.component";
import CartItem from "../cart-item/cart-item.component";
import './cart-dropdown.styles.scss';

const CartDropDown= ({cartItems}) => (
    <div className={'cart-dropdown'}>
        <div className={'cart-items'}>
            {cartItems.map(cartItem => (<CartItem key = {cartItem.id} item = {cartItem}/>))}
        </div>
        <CustomBotton> GO TO CHECKOUT</CustomBotton>
    </div>
)

const mapStateToProps = ({cart : {cartItems}}) => ({
    cartItems: cartItems
})

export default connect(mapStateToProps)(CartDropDown);
