import { generalRequest } from "../request"
import { loginSuccess, loginStart, loginFailure, updateUser } from "./userRedux"
import { createWishlist, setWishlist, editWishlistItem } from "./wishlistRedux"
import { setReviews, editReviewsItem } from "./reviewRedux"

// USER
async function registerRequest(dispatch, user) {
    dispatch(loginStart())
    try {
        const registerResponse = await generalRequest.post(`auth/register`, user)
        const userId = registerResponse.data._id
        const wishlistResponse = await generalRequest.post(`wishlist`, {userId: userId})
        const reviewsResponse = await generalRequest.get(`reviews`)
        dispatch(loginSuccess(registerResponse.data))
        dispatch(createWishlist(wishlistResponse.data))
        dispatch(setReviews(reviewsResponse.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}
async function loginRequest(dispatch, user) {
    dispatch(loginStart())
    try {
        const loginResponse = await generalRequest.post("auth/login", user)
        const userId = loginResponse.data._id
        const wishlistResponse = await generalRequest.get(`wishlist/${userId}`)
        const reviewsResponse = await generalRequest.get(`reviews`)
        dispatch(loginSuccess(loginResponse.data))
        dispatch(setWishlist(wishlistResponse.data))
        dispatch(setReviews(reviewsResponse.data))
    } catch (error) {
        dispatch(loginFailure())
        console.error(error)
    }
}
async function editUser(id, user, dispatch) {
    try {
        const response = await generalRequest.patch(`users/${id}`, user)
        dispatch(updateUser(response.data))
    } catch (error) {
        console.error(error)
    }
}

// WISHLIST
async function editWishlist(id, item, dispatch) {
    try {
        // FIND BY WISHLIST ID 👉
        const response = await generalRequest.patch(`wishlist/${id}`, item)
        dispatch(editWishlistItem(response.data))
    } catch (error) {
        console.error(error)
    }
}

// REVIEWS
async function editReviews(id, item, dispatch) {
    try {
        const response = await generalRequest.patch(`reviews/${id}`, item)
        dispatch(editReviewsItem(response.data))
    } catch (error) {
        console.error(error)
    }
}

export { loginRequest, editUser, editWishlist, registerRequest, editReviews }