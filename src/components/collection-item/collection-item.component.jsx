import React from "react";
import CustomBotton from "../custom-botton/custom-botton.component";
import './collection-item.styles.scss'
import {connect} from "react-redux";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import {addItem} from "../../redux/cart/cart.actions";


const CollectionItem = ({id, item, addItem}) => (
    <div className={'collection-item'}>
        <div
            className={'image'}
            style={{
                backgroundImage: `url(${item.imageUrl})`
            }}
        />
    <div className={'collection-footer'}>
        <span className={'name'}>{item.name}</span>
        <span className={'price'}>{item.price}</span>
    </div>
    <CustomBotton inverted={'true'} onClick={() => addItem(item)}>Add to Cart</CustomBotton>
    </div>
)

mapDispatchToProps = (dispatch) => ({
    addItem : item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);