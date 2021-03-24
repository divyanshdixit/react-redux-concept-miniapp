import React, {useEffect} from 'react'
import {fetchTodos} from '../redux';
import {connect} from 'react-redux';

const TodoContainer = ({todos, fetchTodos}) => {
    useEffect( () => {
        fetchTodos();
    }, [])

    return (
        <div>
            <h1> Todo List : </h1>
            {
                todos.loading ? (
                    <h2> Loading... </h2>
                ) :
                todos.error ? (
                    <h2> {todos.error}</h2>
                ) :
                todos.todos.map((todo) => {
                    return <p> {todo.title}</p>
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTodos : () => dispatch(fetchTodos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (TodoContainer)
