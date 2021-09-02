import React, { useState, useEffect } from 'react';
import List from './list';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getServer } from '../redux/action';


const Lists = () => {

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getServer());
    }, [])
  
    const items = useSelector(state => state.lists);

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