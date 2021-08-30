import React from 'react';
import List from './list';
import { Link } from 'react-router-dom';

const Lists = (props) => {

    const lists = props.lists;


    return (
        <div id='list'>
            {lists.map((item, index) =>
                <div key={index}>
                    <Link to={`/list/${item.name}`}>
                        <List key={index} list={item} props={props} />
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Lists;