import React from 'react';
import Todo from './todo';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { listStatusUpdate } from '../redux/action';


const Todos = () => {

    const dispatch = useDispatch();
    
    const items = useSelector(lists => lists.list);
    
    let { listId } = useParams();
    
    if(items[0]){
        if(listId != items[0].list_id){
            console.log('nope')
            dispatch(listStatusUpdate(listId))
        }
    }
    

    return (
        <div>
            {items.map((todo, index) => <Todo key={index} todo={todo} />)}
        </div>
    );
}

export default Todos;