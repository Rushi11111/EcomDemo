import {createSelector} from "reselect";

const selectCart = state => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartHide = createSelector(
    [selectCart],
    cart => cart.hide
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((tot,cartItem) => tot + cartItem.quantity,0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((tot,cartItem) => tot + cartItem.quantity * cartItem.price,0)
)