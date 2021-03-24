import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { buyPastry } from '../redux';

const HooksPastryContainer = () => {
    const noOfPastry = useSelector(state => state.pastry.numOfPastry)
    const dispatch = useDispatch();

    return (
        <div>
            <h1> Num of Pastry - {noOfPastry}</h1>
            <button type="button" onClick={() => dispatch(buyPastry())}> Buy Pastry </button>
        </div>
    )
}

export default HooksPastryContainer
