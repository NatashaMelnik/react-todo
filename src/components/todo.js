import React from 'react';

const Todo = (props) => {
    const todo = props.todo;

    return (
        <div className='todo'>
            <div>{todo.title} - {todo.description} - {todo.due_date}</div>
            <button>x</button>
        </div>
    );

}

export default Todo;