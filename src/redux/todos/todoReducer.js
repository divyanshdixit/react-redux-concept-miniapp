import { FETCH_TODO_FAILURE, FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS } from "./todoTypes"

const init = {
    loading:true,
    todos:[],
    error:''
}

const todoReducer = (state=init , action) => {
    switch(action.type){
        case FETCH_TODO_REQUEST:
        return {
            ...state, 
            loading:true
        }
        case FETCH_TODO_FAILURE:
        return {
            ...state, 
            loading:false,
            error:action.payload
        }
        case FETCH_TODO_SUCCESS:
        return {
            ...state, 
            loading:false,
            todos:action.payload
        }
        default:
            return state;
    }
}

export default todoReducer