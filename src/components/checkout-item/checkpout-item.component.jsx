import React from "react";

import './checkout-item.styles.scss';
import {removeAllItem} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";

const CheckoutItem = ({item,removeAllFromCart}) => (
    <div className={'checkout-item'} >
        <div className={'image-container'}>
            <img src={item.imageUrl}/>
        </div>
        <span className={'name'}>{item.name}</span>
        <span className={'quantity'}>{item.quantity}</span>
        <span className={'price'}>{item.price}</span>
        <div className={'remove-button'} onClick={() => {removeAllFromCart(item)}}>&#10005;</div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    removeAllFromCart : (item) => dispatch(removeAllItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);