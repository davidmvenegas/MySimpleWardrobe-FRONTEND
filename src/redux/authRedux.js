import { generalRequest } from "../request"
import { loginSuccess, loginStart, loginFailure } from "./userRedux"

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

export { loginRequest }