import React, { useState, useEffect } from 'react';
import List from './list';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Lists = () => {
    const listsApi = useSelector(lists => lists);
    const [items, setItems] = useState([]);
    useEffect(() => {
        listsApi.then(res => setItems(res))
    }, []);

    return (
        <div id='list'>
            {items.map((item, index) =>
                <div key={index}>
                    <Link to={`/list/${item.id}`}>
                        <List key={index} list={item} />
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Lists;