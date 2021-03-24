import axios from "axios"
import { FETCH_TODO_FAILURE, FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS } from "./todoTypes"

const fetchToDoRequest = () => {
    return {
        type: FETCH_TODO_REQUEST
    }
}

const fetchToDoSuccess = (todos) => {
    return {
        type:FETCH_TODO_SUCCESS,
        payload:todos
    }
}

const fetchToDoFail = (error) => {
    return {
        type:FETCH_TODO_FAILURE,
        payload:error
    }
}

// async function 
export const fetchTodos = () => {
    return (dispatch) => {
        dispatch(fetchToDoRequest);
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((res)=> {
                console.log(res);
                const todos = res.data;
                dispatch(fetchToDoSuccess(todos));
            })
            .catch((err) => {
                const error = err.message;
                dispatch(fetchToDoFail(error));
            })
    }
}