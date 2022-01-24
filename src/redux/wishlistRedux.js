import { createSlice } from "@reduxjs/toolkit"

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        wishlist: [],
    },
    reducers: {
        addWishlistItem: (state, action) => {
            state.wishlist.push(action.payload)
        },
        removeWishlistItem: (state, action) => {
            console.log(action.payload)
            state.wishlist = state.wishlist.filter(item => item !== action.payload)
        },
    }
})


export const { addWishlistItem, removeWishlistItem } = wishlistSlice.actions
export default wishlistSlice.reducer