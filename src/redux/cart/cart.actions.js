import CART_TYPES from "./cart.types";

export const toggleCartHide = () => (
    {
        type: CART_TYPES.TOGGLE_CART_HIDE
    }
)

export const addItem = (item) => ({
    type: CART_TYPES.ADD_ITEMS,
    payload: item
    }
)


export const removeAllItem = (item) => ({
        type: CART_TYPES.REMOVE_ALL_ITEM,
        payload: item
    }
)