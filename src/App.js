import './App.css';
import React, { useState } from 'react';
import Todos from './components/todos';
import NewTaskForm from './components/input-form';
import Lists from './components/lists';

const initialLists = [
  {
    id: 1,
    name: 'list1_name',
    tasks: [
      { id: 1, title: 'task1', description: 'task1 list1 desc', done: true, due_date: '2021-09-25' },
      { id: 2, title: 'task2', description: 'task2 list1 desc', done: true, due_date: '2021-09-25' },
      { id: 3, title: 'task3', description: 'task3 list1 desc', done: false, due_date: '2021-09-25' }
    ]
  },
  {
    id: 2,
    name: 'list2_name',
    tasks: [
      { id: 1, title: 'task1', description: 'task1 list2 desc', done: false, due_date: '2021-09-25' },
      { id: 2, title: 'task2', description: 'task2 list2 desc', done: true, due_date: '2021-09-25' },
      { id: 3, title: 'task3', description: 'task3 list2 desc', done: false, due_date: '2021-09-25' }
    ]
  },
  {
    id: 3,
    name: 'list3_name',
    tasks: [
      { id: 1, title: 'task1', description: 'task1 list3 desc', done: false, due_date: '2021-09-25' },
      { id: 2, title: 'task2', description: 'task2 list3 desc', done: false, due_date: '2021-09-25' },
      { id: 3, title: 'task3', description: 'task3 list3 desc', done: true, due_date: '2021-09-25' }
    ]
  }
];

const App = () => {

  const [listId, setChosenListId] = useState(1);
  const [lists, setLists] = useState(initialLists);
  const currentList = lists.find(list => list.id === listId);

  const changeStatus = (todo) => {
    todo.done = !todo.done;
    setLists(lists.slice());
  }

  const sendTodo = (todo) => {
    todo.id = currentList.tasks[currentList.tasks.length - 1].id + 1;
    currentList.tasks.push(todo);
    setLists(lists.map(list => list === currentList ? { ...currentList } : list));
  }
  const deleteTodo = (todo) => {
    currentList.tasks = currentList.tasks.filter(el => el.id !== todo.id);
    setLists(lists.slice());
  }

  return (
    <div className="App">
      <div className='lists-container'>
        <h1 className='main-header'>Lists:</h1>
        <Lists lists={lists} onClick={setChosenListId} />
      </div>
      <div className='todos-container'>
        <div className='todos-list'>
          <h1 className='main-header'>Todos:</h1>
          <Todos list={currentList} onChange={changeStatus} onClick={deleteTodo} />
        </div>
        <div className='input-form'>
          {/* <div><h2>__input__</h2></div> */}
          <NewTaskForm onSubmit={sendTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;