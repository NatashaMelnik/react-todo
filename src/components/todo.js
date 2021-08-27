import React from 'react';

const Todo = (props) => {

    const todo = props.todo;

    const changeStatus = props.props.onChange;
    const deleteTodo = props.props.onClick;

    return (
        <div className='single-todo'>
            <div className='todo-header'>
                <input type='checkBox' checked={todo.done} onChange={() => changeStatus(todo)}></input>
                <div className='todo-title'><b>{todo.title}</b></div>
                {(todo.due_date.length > 0) ? <div className='todo-date'> on {todo.due_date}.</div> : <div>.</div>}
            </div>
            {(todo.description.length > 0) ? <div className='todo-description'>({todo.description})</div> : <div></div>}
            <button onClick={() => deleteTodo(todo)}>x</button>
        </div>
    );

}

export default Todo;