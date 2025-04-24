import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice.jsx"
import wishlistReducer from "../features/wishlistSlice.jsx"

export const store = configureStore({
    reducer : {
        cart : cartReducer,
        wishlist : wishlistReducer
    }
})