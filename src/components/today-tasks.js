import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Todo from './todo';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getTodayTasks } from '../redux/action';

const TodayTasks = React.memo(() => {

    const dispatch = useDispatch();

    const items = useSelector(lists => lists);

    useEffect(() => {
        dispatch(getTodayTasks());
    }, []);

    function getListName(id) {
        return items.lists.find(list => list.id = id).list_name;
    }

    return (
        <div className='today-container'>
            {items.list.map((todo, index) =>
                <div key={index} >
                    <Todo todo={todo} />
                    <Link to={`/list/${todo.list_id}`}>
                        <div className='list-name_link'>{getListName(todo.list_id)}</div>
                    </Link>
                </div>

            )}
        </div>
    )
});

export default TodayTasks;