import React from "react";
import {connect} from "react-redux";
import CustomBotton from "../custom-botton/custom-botton.component";
import CartItem from "../cart-item/cart-item.component";
import './cart-dropdown.styles.scss';
import {selectCartItems} from '../../redux/cart/cart.selector'
import {withRouter} from "react-router-dom";
import {toggleCartHide} from "../../redux/cart/cart.actions";

const CartDropDown= ({toggleCartHide, cartItems, history}) => (
    <div className={'cart-dropdown'}>
        <div className={'cart-items'}>
            {
                cartItems.length ?
                    (cartItems.map(cartItem =>
                    (<CartItem key = {cartItem.id} item = {cartItem}/>
                    )))
            :
                <span className={'empty-message'}>Your cart is empty</span>
            }
        </div>
        <CustomBotton onClick={() =>
            {
                toggleCartHide()
                history.push('/checkout')
            }
        }> GO TO CHECKOUT</CustomBotton>
    </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCartHide: () => dispatch(toggleCartHide())
})


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropDown));
