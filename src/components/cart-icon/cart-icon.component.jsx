import React from "react";
import {connect} from "react-redux";
import {ReactComponent as ShoppingIcon} from "../../Asset/shopping-bag.svg";
import {toggleCartHide} from "../../redux/cart/cart.actions";
import './cart-icon.styles.scss'
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";

const CartIcon = ({toggleCartHide, itemCount}) => (
    <div className={'cart-icon'} onClick = {toggleCartHide}>
        <ShoppingIcon />
        <span className={'item-count'}>{itemCount}</span>
    </div>
)

const mapStateToProps = state => ({
    itemCount : selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCartHide: () => dispatch(toggleCartHide())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);