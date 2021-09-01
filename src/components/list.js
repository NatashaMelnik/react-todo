import React from 'react';
import { useDispatch } from 'react-redux';
import { listStatusUpdate } from '../redux/action';


const List = (props) => {

    const dispatch = useDispatch();
    // const choseList = props.props.onClick;

    const listName = props.list.list_name;
    const listId = props.list.id;

    return (

        <div className='list'>
            <div onClick={() => { dispatch(listStatusUpdate(listId)) }}> ~{listName}</div> 
            {/*  onClick={() => { choseList(listId) }} */}
        </div>

    );

}

export default List;