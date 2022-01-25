import { generalRequest } from "../request"
import { loginSuccess, loginStart, loginFailure, updateUser } from "./userRedux"
import { createWishlist, setWishlist, editWishlistItem } from "./wishlistRedux"

// USER
async function registerRequest(dispatch, user) {
    dispatch(loginStart())
    try {
        const registerResponse = await generalRequest.post(`auth/register`, user)
        const userId = registerResponse.data._id
        const wishlistResponse = await generalRequest.post(`wishlist`, {userId: userId})
        dispatch(loginSuccess(registerResponse.data))
        dispatch(createWishlist(wishlistResponse.data))
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
        dispatch(loginSuccess(loginResponse.data))
        dispatch(setWishlist(wishlistResponse.data))
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
        const response = await generalRequest.patch(`wishlist/${id}`, item)
        dispatch(editWishlistItem(response.data))
    } catch (error) {
        console.error(error)
    }
}

export { loginRequest, editUser, editWishlist, registerRequest }