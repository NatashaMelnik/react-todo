import React from 'react';
import Todo from './todo';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { listStatusUpdate } from '../redux/action';


const Todos = React.memo(() => {

    const dispatch = useDispatch();

    const all = useSelector(lists => lists);
    const items = all.list;

    let { listId } = useParams();

    if (items[0]) {
        if (listId != items[0].list_id) {
            dispatch(listStatusUpdate(listId));
        }
    }

    function getListName(id) {
        if(all.lists[0]){
            return all.lists.find(list => list.id == id).list_name;
        }
    }


    return (
        <div key='list-todos'>
            <h1 className='todos-main-header'>{getListName(listId)} todos:</h1>
            {items.map((todo, index) => <Todo key={index} todo={todo} />)}
        </div>
    );
});

export default Todos;