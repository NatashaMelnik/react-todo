import React from 'react';
import Todo from './todo';

const Todos = React.memo((props) => {

    let list = props.list

    return (
        <div>
            {list.tasks.map((todo, index) => <Todo key={index} todo={todo} props={props} />)}
        </div>
    );
})

export default Todos;