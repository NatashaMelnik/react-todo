import React from 'react';

const List = (props) => {

    const choseList = props.props.onClick;
    
    const listName = props.list.name;
    const listId = props.list.id;

    return (
        <div className='list'>
            <div onClick={() => { choseList(listId) }}> ~{listName}</div>
        </div>
    );

}

export default List;