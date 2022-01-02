import CART_TYPES from "./cart.types";
import {addItemTocart} from "./cart.utils";
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
        default:
            return state
    }
}

export default cartReducer;