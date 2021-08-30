import React from 'react';
import { Link } from 'react-router-dom';
import Todo from './todo';

const getCurrentDate = () => {
    return new Date();
};

const isTodayTodo = (todo) => {
    const todoDate = new Date(todo.due_date);
    if(todoDate.setHours(0,0,0,0) === getCurrentDate().setHours(0,0,0,0)) {
        return true;
    }
};

const TodayTasks = (props) => {

    const lists = props.lists;

    return (
        <div className='today-container'>

            {lists.map((list, index) =>
                <div key={index}>
                    <Link to={`/list/${list.name}`}>
                        <h2 className='today-title'>{list.name}</h2>
                    </Link>
                    {list.tasks.map((todo, index2) =>
                        {if(isTodayTodo(todo)) {
                           return <Todo key={index2} todo={todo} props={props} />
                        }}
                    )}
                </div>
            )}
        </div>
    )
}

export default TodayTasks;