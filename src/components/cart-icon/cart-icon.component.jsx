import React from "react";
import {connect} from "react-redux";
import {ReactComponent as ShoppingIcon} from "../../Asset/shopping-bag.svg";
import {toggleCartHide} from "../../redux/cart/cart.actions";
import './cart-icon.styles.scss'

const CartIcon = ({toggleCartHide}) => (
    <div className={'cart-icon'} onClick = {toggleCartHide}>
        <ShoppingIcon />
        <span className={'item-count'}>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHide: () => dispatch(toggleCartHide())
})

export default connect(null,mapDispatchToProps)(CartIcon);