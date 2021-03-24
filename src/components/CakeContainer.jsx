import React from 'react'
import { buyCake } from '../redux';
import {connect} from 'react-redux';

const CakeContainer = (props) => {

    return (
        <div>
            <h1> Cake Container - {props.numOfCakes}</h1>
            <button onClick={props.buyCake}> Buy cake </button>
        </div>
    )
}

// step 1 => redux state as a parameter
const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cake.numOfCakes 
    }
}

// step 2 redux dispatch() method as a parameter
const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake()) // dispatch(action_creator())
    }
}

// step 3 : connect these two functions with component
// connect() function will connect the component with redux store

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
