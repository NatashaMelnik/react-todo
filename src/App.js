import './App.css';
import React, { useState } from 'react';
import Todos from './components/todos';
import NewTaskForm from './components/input-form';
import Lists from './components/lists';
import { Route, useLocation, Link } from 'react-router-dom';
import UnknownPage from './components/unknown-page';
import TodayTasks from './components/today-tasks';
import { useSelector } from 'react-redux';

function setLists() {}

const App = () => {
  const lists = useSelector(lists => lists);

  const [listId, setChosenListId] = useState(1);
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