import axios from "axios"
import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes"

const fetchUserRequest = () => {
    return {
        type:FETCH_USER_REQUEST
    }
}

const fetchUserSuccess = (users) => {
    return {
        type:FETCH_USER_SUCCESS,
        payload:users
    }
}

const fetchUserFail = (error) => {
    return {
        type:FETCH_USER_FAILURE,
        payload:error
    }
}

// async function that returns a function which can cause a side effect like axios calls
// async action creators

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                const users = res.data
                dispatch(fetchUserSuccess(users));
            })
            .catch((err)=> {
                const errMsg = err.message;
                dispatch(fetchUserFail(errMsg))
            })
    }
}
