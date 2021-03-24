import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {fetchUsers} from '../redux';

const UserContainer = ({userData, fetchUsers}) => {

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <div>
            <h1> Users List </h1>
            {
                userData.loading ? (<h2> Loading...</h2>) : 
                userData.error ? (<h2> {userData.error}</h2>) :
                userData.users.map( (user) => {

                    return <p> {user.name} </p>
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        userData: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers : () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
