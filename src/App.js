import './App.css';
import React, { useState } from 'react';
import Todos from './components/todos';
import NewTaskForm from './components/input-form';
import Lists from './components/lists';
import { Route, useLocation, Link } from 'react-router-dom';
import UnknownPage from './components/unknown-page';
import TodayTasks from './components/today-tasks';


const initialLists = [
  {
    id: 1,
    name: 'list1_name',
    tasks: [
      { id: 1, title: 'task1', description: 'task1 list1 desc', done: true, due_date: '2021-08-30' },
      { id: 2, title: 'task2', description: 'task2 list1 desc', done: true, due_date: '2021-08-30' },
      { id: 3, title: 'task3', description: 'task3 list1 desc', done: false, due_date: '2021-08-30' },
      { id: 4, title: 'task1', description: 'task1 list1 desc', done: true, due_date: '2021-08-30' },
      { id: 5, title: 'task2', description: 'task2 list1 desc', done: true, due_date: '2021-09-25' },
      { id: 6, title: 'task3', description: 'task3 list1 desc', done: false, due_date: '2021-08-30' },
      { id: 7, title: 'task1', description: 'task1 list1 desc', done: true, due_date: '2021-09-25' },
      { id: 8, title: 'task2', description: 'task2 list1 desc', done: true, due_date: '2021-09-25' },
      { id: 9, title: 'task3', description: 'task3 list1 desc', done: false, due_date: '2021-08-30' },
      { id: 10, title: 'task1', description: 'task1 list1 desc', done: true, due_date: '2021-09-25' },
      { id: 11, title: 'task2', description: 'task2 list1 desc', done: true, due_date: '2021-08-30' },
      { id: 12, title: 'task12', description: 'task3 list1 desc', done: false, due_date: '2021-09-25' }
    ]
  },
  {
    id: 2,
    name: 'list2_name',
    tasks: [
      { id: 13, title: 'task1', description: 'task1 list2 desc', done: false, due_date: '2021-08-30' },
      { id: 14, title: 'task2', description: 'task2 list2 desc', done: true, due_date: '2021-09-25' },
      { id: 15, title: 'task3', description: 'task3 list2 desc', done: false, due_date: '2021-09-25' }
    ]
  },
  {
    id: 3,
    name: 'list3_name',
    tasks: [
      { id: 16, title: 'task1', description: 'task1 list3 desc', done: false, due_date: '2021-08-30' },
      { id: 17, title: 'task2', description: 'task2 list3 desc', done: false, due_date: '2021-08-30' },
      { id: 18, title: 'task3', description: 'task3 list3 desc', done: true, due_date: '2021-09-25' }
    ]
  }
];

const App = () => {

  const [listId, setChosenListId] = useState(1);
  const [lists, setLists] = useState(initialLists);
  let currentList = lists.find(list => list.id === listId);

  const changeStatus = (todo) => {
    todo.done = !todo.done;
    setLists(lists.slice());
  }

  const sendTodo = (todo) => {
    todo.id = lists[lists.length - 1].tasks[lists[lists.length - 1].tasks.length - 1] + 1;
    currentList.tasks.push(todo);
    setLists(lists.map(list => list === currentList ? { ...currentList } : list));
  }
  const deleteTodo = (todo) => {
    lists.forEach(list => list.tasks = list.tasks.filter(el => el.id !== todo.id));
    setLists(lists.slice());
  }

  let location = useLocation();
  if (location.pathname.length > 3 && location.pathname !== '/today' && location.pathname !== '/today/') {
    const pathList = lists.find(list => list.name === location.pathname.substring(6));
    currentList = (pathList) ? pathList : 'err';
  }

  return (
    <div className="App">
      <div className='lists-container'>
        <h1 className='main-header'>Lists:</h1>
        <Lists lists={lists} onClick={setChosenListId} />
        <Link to='/today'>
          <div className='today-lists_button'>Today tasks</div>
        </Link>
      </div>
      <div className='todos-container'>
        {currentList !== 'err' ? (
          <div className='todos-list'>
            <h1 className='todos-main-header'>Todos:</h1>
            <Route path='/today'>
              <TodayTasks lists={lists} onChange={changeStatus} onClick={deleteTodo} />
            </Route>
            <Route path='/list/:listName'>
              <Todos list={currentList} onChange={changeStatus} onClick={deleteTodo} />
              <div className='input-form'>
                <NewTaskForm onSubmit={sendTodo} />
              </div>
            </Route>
          </div>
        )
          : (
            <UnknownPage />
          )}
      </div>
    </div>




  );
}

export default App;