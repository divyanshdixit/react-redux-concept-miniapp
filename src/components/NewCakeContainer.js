import React, {useState} from 'react'
import {connect} from 'react-redux';
import { buyCake } from '../redux';

const NewCakeContainer = (props) => {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h1> New number of cakes - {props.numOfNewCakes}</h1>
            <input value={number} onChange={(e) => setNumber(e.target.value)}/>
            <button onClick={() => props.buyCake(number)}> Buy {number} Cakes</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        numOfNewCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        buyCake : (number) => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)
