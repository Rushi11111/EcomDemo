import React from "react";
import {useDispatch, useSelector} from "react-redux";
import CustomBotton from "../custom-botton/custom-botton.component";
import CartItem from "../cart-item/cart-item.component";
import './cart-dropdown.styles.scss';
import {selectCartItems} from '../../redux/cart/cart.selector'
import {useHistory} from "react-router-dom";
import {toggleCartHide} from "../../redux/cart/cart.actions";

const CartDropDown= () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const history = useHistory()
    return (
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
                dispatch(toggleCartHide())
                history.push('/checkout')
            }
            }> GO TO CHECKOUT</CustomBotton>
        </div>
    )
}


export default CartDropDown;
