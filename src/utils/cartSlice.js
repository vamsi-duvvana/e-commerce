import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: 0,
        cartValue: 0,
    },
    reducers: {
        addCartItems: (state, action) => {
            state.cartItems = state.cartItems + 1;
            state.cartValue = state.cartValue + action.payload.price;
        },
        deleteCartItems: (state, action) => {
            if (state.cartItems > 0) {
                state.cartItems = state.cartItems - 1;
            } else {
                state.cartItems = 0;
            }
        }
    }
})

export const { addCartItems, deleteCartItems } = cartSlice.actions;
export default cartSlice.reducer;
