import React from 'react';
import Todo from './todo';

const Todos = (props) => {
    const todos = props.todos;

    return (
        <div id='todo'>
            {todos.map((todo, index) => <Todo key={index} todo={todo}/>)}
        </div>
    )
}

export default Todos;