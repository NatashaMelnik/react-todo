// import './App.css';
import React, { Component } from 'react';
import Todos from './components/todos';
import NewTaskForm from './components/input-form';

class App extends Component {
  state = {
    todos: [
      { id: 1, title: 'task1', description: 'task1 desc', done: false, due_date: '2021-09-25' },
      { id: 2, title: 'task2', description: 'task2 desc', done: false, due_date: '2021-09-25' },
      { id: 3, title: 'task3', description: 'task3 desc', done: true, due_date: '2021-09-25' }
    ]
  }

  sendTodo = (todo) => {
    console.log('todo', todo);
    this.setState(
      this.state.todos = [...this.state.todos, todo]
    );
    console.log(this.state.todos);
    console.log('todo2 ', todo);
    return this.state;
  }

  render() {

    return (

      <div className="App">
        <div className='todos-header'>
          <h1>Todos:</h1>
        </div>
        <div className='todos-list'>
          <Todos todos={this.state.todos} />
        </div>
        <div className='input-form'>
          <NewTaskForm onSubmit={this.sendTodo}/>
        </div>
      </div>

    );
  }
}

export default App;
