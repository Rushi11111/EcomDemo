import CART_TYPES from "./cart.types";
import {addItemTocart, removeAllItem, removeItemFromCart} from "./cart.utils";
const INITIAL_STATE = {
    hide: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case CART_TYPES.TOGGLE_CART_HIDE :
            return {
                ...state,
                hide: !state.hide
            }
        case CART_TYPES.ADD_ITEMS:
            return {
                ...state,
                cartItems: addItemTocart(state.cartItems, action.payload)
            }
        case CART_TYPES.REMOVE_ALL_ITEM:
            return {
                ...state,
                cartItems: removeAllItem(state.cartItems,action.payload)
            }
        case CART_TYPES.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems,action.payload)
            }
        case CART_TYPES.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }
        default:
            return state
    }
}

export default cartReducer;