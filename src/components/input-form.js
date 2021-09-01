import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/action';

const NewTaskForm = () => {

    const dispatch = useDispatch();

    const state = { listId: 1, title: '', description: '', due_date: '', done: '' };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (state.title.length > 0) {
            dispatch(addTodo(state));
            document.getElementById('form').reset();
        }
    }

    const onChangeTitle = (event) => {
        state.title = event.target.value;
    }

    const onChangeDescription = (event) => {
        state.description = event.target.value;
    }

    const onChangeDate = (event) => {
        event.target.due_date = event.target.value;
    }

    const onChangeBox = (event) => {
        event.target.done = event.target.value;
    }

    return (

        <form className='input-form' id='form' onSubmit={onSubmitHandler}>
            <input type="text" className='title-input' placeholder='title' onChange={onChangeTitle} />
            <input type="text" placeholder='description' onChange={onChangeDescription} />
            <input type="checkbox" onChange={onChangeBox} />
            <input type="date" onChange={onChangeDate} />
            <button type='submit' className='send-submit_button'>send</button>
        </form>

    );

}


export default NewTaskForm;