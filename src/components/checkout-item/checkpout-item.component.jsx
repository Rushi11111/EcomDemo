import React from "react";

import './checkout-item.styles.scss';
import {addItem, removeAllItem, removeItem} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";

const CheckoutItem = ({item,removeAllItem, addItem, removeItem}) => (
    <div className={'checkout-item'} >
        <div className={'image-container'}>
            <img src={item.imageUrl}/>
        </div>
        <span className={'name'}>{item.name}</span>
        <span className={'quantity'}>
            <div className={'arrow'} onClick={() => removeItem(item)}>&#10094;</div>
            <span className={'value'}> {item.quantity} </span>
            <div className={'arrow'} onClick={() => addItem(item)}>&#10095;</div>
        </span>
        <span className={'price'}>{item.price}</span>
        <div className={'remove-button'} onClick={() => {removeAllItem(item)}}>&#10005;</div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    removeAllItem : (item) => dispatch(removeAllItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);