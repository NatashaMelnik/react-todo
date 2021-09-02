import React from 'react';
import { Link } from 'react-router-dom';
import Todo from './todo';
import { useSelector } from 'react-redux';
import fetchServer from '../services/method-collection';
import { useDispatch } from 'react-redux';
import { getTodayTasks } from '../redux/action';

const TodayTasks = () => {

    // const dispatch = useDispatch();
    // dispatch(getTodayTasks());

    const items = useSelector(lists => lists);

    console.log(items)

    const lists = [];

    return (
        <div className='today-container'>
            <div>qweqw</div>
            {lists.map((list, index) =>
                <div key={index}>
                    <Link to={`/list/${list.name}`}>
                        <h2 className='today-title'>{list.name}</h2>
                    </Link>
                    {list.tasks.map((todo, index2) =>
                        <Todo key={index2} todo={todo} />
                    )}
                </div>
            )}
        </div>
    )
}

export default TodayTasks;