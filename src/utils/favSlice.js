import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
    name: "favorites",
    initialState: {
        favCounter: 0,
        favProductDetails: null
    },
    reducers: {
        addFav: (state, action) => {
            state.favCounter = state.favCounter + 1;
            state.favProductDetails = action.payload;
        }
    }
})

export const { addFav } = favSlice.actions;
export default favSlice.reducer;
