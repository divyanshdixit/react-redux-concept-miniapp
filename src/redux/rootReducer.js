import {combineReducers} from 'redux';
import cakeReducer from './cake/cakeReducer';
import icecreamReducer from './icecream/icecreamReducer';
import pastryReducer from './pastry/pastryReducer';
import todoReducer from './todos/todoReducer';
import userReducer from './user/userReducers';

const rootReducer = combineReducers({
    cake:cakeReducer,
    icecream: icecreamReducer,
    pastry:pastryReducer,
    user:userReducer,
    todo:todoReducer
})

export default rootReducer