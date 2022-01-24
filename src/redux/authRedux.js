import { generalRequest } from "../request"
import { loginSuccess, loginStart, loginFailure, updateUser } from "./userRedux"

async function loginRequest(dispatch, user) {
    dispatch(loginStart())
    try {
        const response = await generalRequest.post("auth/login", user)
        dispatch(loginSuccess(response.data))
    } catch (error) {
        dispatch(loginFailure())
        console.error(error)
    }
}
async function editUser(id, user, dispatch) {
    try {
        const response = await generalRequest.patch(`/users/${id}`, user)
        dispatch(updateUser(response.data))
    } catch (error) {
        console.error(error)
    }
}

export { loginRequest, editUser }