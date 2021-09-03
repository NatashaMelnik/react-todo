import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/action';
import { useSelector } from 'react-redux';

const NewTaskForm = () => {

    const dispatch = useDispatch();
    const items = useSelector(state => state.list);

    const state = { name: '', description: '', due_date: '', done: '', list_id: '' };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (state.name.length > 0 && items) {
            state.done = (state.done+'') ? true : false;
            state.list_id = items[0].list_id;
            console.log(state.list_id);
            dispatch(addTodo(state));
            document.getElementById('form').reset();
        }
    }

    const onChangeTitle = (event) => {
        state.name = event.target.value;
    }

    const onChangeDescription = (event) => {
        state.description = event.target.value;
    }

    const onChangeDate = (event) => {
        state.due_date = event.target.value;
    }

    const onChangeBox = (event) => {
        state.done = event.target.value;
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