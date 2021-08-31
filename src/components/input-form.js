import React from 'react';
// import { addTodo } from '../redux/action';

const NewTaskForm = () => {
    const state = { title: '', description: '', due_date: '', done: '' };

    const onSubmitHandler = (event) => {
        
        event.preventDefault();
        console.log(state.title)
        if (state.title.length > 0) {
            this.props.onSubmit(
                this.state
            );
            this.setState({ title: '', description: '', due_date: '', done: '' });
        }
    }

    const onChangeTitle = (event) => {
        state.title = event.target.value;
        return event.target.value;
        // return this.setState({ title: event.target.value })
    }

    const onChangeDescription = (event) => {
        state.description = event.target.value;
        // return this.setState({ description: event.target.value })
    }

    const onChangeDate = (event) => {
        event.target.due_date = event.target.value; 
        // return this.setState({ due_date: event.target.value })
    }

    const onChangeBox = (event) => {
        event.target.done = event.target.value; 
        // return this.setState({ done: event.target.value })
    }

    return (

        <form className='input-form' onSubmit={() => onSubmitHandler()}>
            <input type="text" className='title-input' placeholder='title' onChange={onChangeTitle} />
            <input type="text" placeholder='description' onChange={onChangeDescription} value={state.description} />
            <input type="checkbox" onChange={onChangeBox} checked={state.done} />
            <input type="date" onChange={onChangeDate} value={state.due_date} />
            <button type='submit' className='send-submit_button'>send</button>
        </form>

    );

}


export default NewTaskForm;