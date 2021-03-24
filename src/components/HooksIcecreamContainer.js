import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { buyIcecream } from '../redux';

const HooksIcecreamContainer = () => {
    
    const noOfIcecream = useSelector(state =>state.icecream.numOfIcecreams)

    const dispatch = useDispatch();

    return (
        <div>
            <h1> Num of Icecream - {noOfIcecream}</h1>
            <button onClick={() => dispatch(buyIcecream())}> Buy Icecream </button>
        </div>
    )
}

export default HooksIcecreamContainer
