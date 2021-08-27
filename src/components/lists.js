import React from 'react';
import List from './list';

const Lists = (props) => {

    const lists = props.lists;

    return (
        <div id='list'>
            {lists.map((item, index) =>
                <List key={index} list={item} props={props}/>
            )}
        </div>
    )
}

export default Lists;