import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/action';

const Todo = (props) => {

    const todo = props.todo;

    const changeStatus = props.props.onChange;
    // const deleteTodo = props.props.onClick;

    const dispatch = useDispatch();

    return (
        <div className='single-todo'>
            <div className='todo-header'>
                <input type='checkBox' checked={todo.done} onChange={() => changeStatus(todo)}></input>
                <div className='todo-title'><b>{todo.title}</b></div>
                {(todo.due_date.length > 0) ? <div className='todo-date'> on {todo.due_date}.</div> : <div>.</div>}
            </div>
            {(todo.description.length > 0) ? <div className='todo-description'>({todo.description})</div> : <div></div>}
            <button className='delete-button' onClick={() => dispatch(deleteTodo(todo))}>x</button>
        </div>
    );

}

export default Todo;