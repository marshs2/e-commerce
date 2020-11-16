import { createSelector } from 'reselect';

// Input selector
const selectCart = state => state.cart;

// Output Selector - Because u use createSelector
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems], 
    (cartItems) => cartItems.reduce((acc, cartItem) => (
        acc + cartItem.quantity
    ), 0)
)
