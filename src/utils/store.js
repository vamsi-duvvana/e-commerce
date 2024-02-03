import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import favReducer from "./favSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        favorites: favReducer,
    }
})

export default store;
