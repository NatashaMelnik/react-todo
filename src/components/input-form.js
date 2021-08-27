import React, { Component } from 'react';


class NewTaskForm extends Component {

    state = { title: '', description: '', due_date: '', done: '' };

    onSubmitHandler = (event) => {
        event.preventDefault();
        if (this.state.title.length > 0) {
            this.props.onSubmit(
                this.state
            );
            this.setState({ title: '', description: '', due_date: '', done: '' });
        }
    }

    onChangeTitle = (event) => {
        return this.setState({ title: event.target.value })
    }

    onChangeDescription = (event) => {
        return this.setState({ description: event.target.value })
    }

    onChangeDate = (event) => {
        return this.setState({ due_date: event.target.value })
    }

    onChangeBox = (event) => {
        return this.setState({ done: event.target.value })
    }

    render() {

        return (

            <form className='input-form' onSubmit={this.onSubmitHandler}>
                <input type="text" placeholder='title' onChange={this.onChangeTitle} value={this.state.title} />
                <input type="text" placeholder='description' onChange={this.onChangeDescription} value={this.state.description} />
                <input type="checkbox" onChange={this.onChangeBox} checked={this.state.done} />
                <input type="date" onChange={this.onChangeDate} value={this.state.due_date} />
                <button type='submit'>send</button>
            </form>

        );
    }
}

export default NewTaskForm;