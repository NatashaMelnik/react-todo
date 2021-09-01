import './App.css';
import React, { useState } from 'react';
import Todos from './components/todos';
import NewTaskForm from './components/input-form';
import Lists from './components/lists';
import { Route, useLocation, Link } from 'react-router-dom';
import UnknownPage from './components/unknown-page';
import TodayTasks from './components/today-tasks';
import { useSelector } from 'react-redux';


const App = () => {
  const lists = useSelector(lists => lists);
  // console.log(lists)
  // lists.then(res => console.log(res))

  // const [listId, setChosenListId] = useState(1);
  // let currentList = lists.find(list => list.id === listId);

  // let location = useLocation();
  // if (location.pathname.length > 3 && location.pathname !== '/today' && location.pathname !== '/today/') {
  //   const pathList = lists.find(list => list.name === location.pathname.substring(6));
  //   currentList = (pathList) ? pathList : 'err';
  // }


  return (
    <div className="App">
      <div className='lists-container'>
        <h1 className='main-header'>Lists:</h1>
        <Lists/>
        <Link to='/today'>
          <div className='today-lists_button'>Today tasks</div>
        </Link>
      </div>
      <div className='todos-container'>
        {/* {currentList !== 'err' ? ( */}
          <div className='todos-list'>
            <h1 className='todos-main-header'>Todos:</h1>
            <Route path='/today'>
              {/* <TodayTasks lists={lists} /> */}
            </Route>
            <Route path='/list/:listId'>
              <Todos list={lists} />
              <div className='input-form'>
                <NewTaskForm />
              </div>
            </Route>
          </div>
        {/* ) */}
          {/* : (
            <UnknownPage />
          )} */}
      </div>
    </div>

  );
}

export default App;