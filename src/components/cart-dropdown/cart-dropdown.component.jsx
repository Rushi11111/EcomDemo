import React from "react";

import CustomBotton from "../custom-botton/custom-botton.component";

import './cart-dropdown.styles.scss';

const CartDropDown= () => (
    <div className={'cart-dropdown'}>
        <div className={'cart-item'}>
        </div>
        <CustomBotton> GO TO CHECKOUT</CustomBotton>
    </div>
)

export default CartDropDown;
