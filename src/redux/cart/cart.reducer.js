import CART_TYPES from "./cart.types";

const INITIAL_STATE = {
    hide: true
}

const cartReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case CART_TYPES.TOGGLE_CART_HIDE :
            return {
                ...state,
                hide: !state.hide
            }
        default:
            return state
    }
}

export default cartReducer;