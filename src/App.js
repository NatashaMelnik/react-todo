import './App.css';
import React, { useEffect } from 'react';
import Todos from './components/todos';
import NewTaskForm from './components/input-form';
import Lists from './components/lists';
import { Route, Link } from 'react-router-dom';
import TodayTasks from './components/today-tasks';

const App = () => {
  
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getServer());
  // }, [])

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
            <Route path='/today'>
              <h1 className='todos-main-header'>Todos for today:</h1>
              <TodayTasks/>
            </Route>
            <Route path='/list/:listId'>
              <Todos/>
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