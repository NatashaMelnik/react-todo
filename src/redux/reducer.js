// start


function remove(el, array) {
    return array.filter(item => item.id !== el.id);
}

function changeStatus(el, array) {
    const todoIndex = array.findIndex(task => task.id === el.id);
    array[todoIndex].done = !array[todoIndex].done;
    return array;
}

const initState = {
    lists: [],
    list: []
};

export const todoReducer = (state = initState, action) => {
    
    switch (action.type) {

        case 'GetLISTSAndStartLIST':
            return state = action.payload;

        case 'GET_TODAY_TASKS':
            return state = action.payload;

        case 'LIST_STATUS_UPDATED':
            return state = action.payload;

        case 'DELETE_TODO':
            // const todoForDelete = action.payload;
            // return state.map(list => list.tasks.includes(todoForDelete) ? { ...list, tasks: remove(todoForDelete, list.tasks) } : list)
            return state;

        case 'CHANGE_STATUS':
            // const todoToChangeStatus = action.payload;
            // return state.map(list => list.tasks.includes(todoToChangeStatus) ? { ...list, tasks: changeStatus(todoToChangeStatus, list.tasks) } : list);
            return state;

        case 'ADD_TODO':
            const newTodoObj = action.payload;
            console.log(newTodoObj);
            console.log(state);
            return state;
            // const listIdAddTo = newTodoObj.listId;
            // return state.map(list => list.id === listIdAddTo ? { ...list, tasks: [...list.tasks, newTodoObj] } : list);

        default:
            return state;
    }
};










// const RootReducer = (state, action) => {

//     if (action.type === 'init') {
//         return state;
//     }
//     else if (action.type === 'changeCurrentList') {
//         return state;
//     }
//     else if (action.type === 'addTaskToCurrentList') {
//         return state;
//     }
//     else if (action.type === 'changeDoneStatusInCurrentList') {
//         return state;
//     }
//     else if (action.type === 'deleteTaskFromCurrentList') {
//         return state;
//     }
//     return state;
// }

// export default RootReducer;