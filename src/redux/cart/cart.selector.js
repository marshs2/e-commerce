import { createSelector } from 'reselect';

// Input selector
const selectCart = state => state.cart;

// Output Selector - Because u use createSelector
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems], 
    (cartItems) => cartItems.reduce((acc, cartItem) => (
        acc + cartItem.quantity
    ), 0)
)


export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((acc, cartItem) => (
        acc + (cartItem.quantity * cartItem.price)
    ), 0)
)