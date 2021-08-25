import './App.css';
import React, { Component } from 'react';
import Todos from './components/todos';

class App extends Component {
  state = {
    todos: [
      { id: 1, title: 'task1', description: 'task1 desc', done: false, due_date: '2021-09-25' },
      { id: 2, title: 'task2', description: 'task2 desc', done: false, due_date: '2021-09-25' },
      { id: 3, title: 'task3', description: 'task3 desc', done: true, due_date: '2021-09-25' }
    ]
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
      </div>
    );
  }
}

export default App;
