export const addItemTocart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    )

    if(existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        )
    } else {
       return [...cartItems, {...cartItemToAdd, quantity: 1}]
    }
}

export const removeAllItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    if(existingCartItem) {
        return cartItems.filter(cartItem => !cartItem.id === cartItemToRemove.id)
    } else {
        return [...cartItems]
    }
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => !(cartItem.id === cartItemToRemove.id))
    } else {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToRemove.id ?
                {...cartItem,quantity: cartItem.quantity - 1}
                :
                cartItem
        )
    }
}