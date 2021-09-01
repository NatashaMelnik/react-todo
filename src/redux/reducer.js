import fetchServer from '../services/method-collection';

const initState = [
    {
        id: 1,
        name: 'list1_name',
        tasks: [
            { id: 1, title: 'task1', description: 'task1 list1 desc', done: true, due_date: '2021-08-31' },
            { id: 2, title: 'task2', description: 'task2 list1 desc', done: true, due_date: '2021-08-31' },
            { id: 3, title: 'task3', description: 'task3 list1 desc', done: false, due_date: '2021-08-31' },
            { id: 4, title: 'task1', description: 'task1 list1 desc', done: true, due_date: '2021-08-31' },
            { id: 5, title: 'task2', description: 'task2 list1 desc', done: true, due_date: '2021-09-25' },
            { id: 6, title: 'task3', description: 'task3 list1 desc', done: false, due_date: '2021-08-31' },
            { id: 7, title: 'task1', description: 'task1 list1 desc', done: true, due_date: '2021-09-25' },
            { id: 8, title: 'task2', description: 'task2 list1 desc', done: true, due_date: '2021-09-25' },
            { id: 9, title: 'task3', description: 'task3 list1 desc', done: false, due_date: '2021-08-31' },
            { id: 10, title: 'task1', description: 'task1 list1 desc', done: true, due_date: '2021-09-25' },
            { id: 11, title: 'task2', description: 'task2 list1 desc', done: true, due_date: '2021-08-31' },
            { id: 12, title: 'task12', description: 'task3 list1 desc', done: false, due_date: '2021-09-25' }
        ]
    },
    {
        id: 2,
        name: 'list2_name',
        tasks: [
            { id: 13, title: 'task1', description: 'task1 list2 desc', done: false, due_date: '2021-08-31' },
            { id: 14, title: 'task2', description: 'task2 list2 desc', done: true, due_date: '2021-09-25' },
            { id: 15, title: 'task3', description: 'task3 list2 desc', done: false, due_date: '2021-09-25' }
        ]
    },
    {
        id: 3,
        name: 'list3_name',
        tasks: [
            { id: 16, title: 'task1', description: 'task1 list3 desc', done: false, due_date: '2021-08-31' },
            { id: 17, title: 'task2', description: 'task2 list3 desc', done: false, due_date: '2021-08-31' },
            { id: 18, title: 'task3', description: 'task3 list3 desc', done: true, due_date: '2021-09-25' }
        ]
    }
];


function createId(lists) {
    return lists[lists.length - 1].tasks[lists[lists.length - 1].tasks.length - 1].id + 1;
}

function rebaseTodo(obj, state) {
    obj.id = createId(state);
    return obj;
}

function remove(el, array) {
    return array.filter(item => item.id !== el.id);
}

function changeStatus(el, array) {
    const todoIndex = array.findIndex(task => task.id === el.id);
    array[todoIndex].done = !array[todoIndex].done;
    return array;
}

export const todoReducer = (state = fetchServer('GetAllLists'), action) => {
    
    switch (action.type) {

        case 'LIST_STATUS_UPDATED':
            const newListId = action.payload;
            console.log(newListId);
            return state;

        case 'DELETE_TODO':
            const todoForDelete = action.payload;
            return state.map(list => list.tasks.includes(todoForDelete) ? { ...list, tasks: remove(todoForDelete, list.tasks) } : list)

        case 'CHANGE_STATUS':
            const todoToChangeStatus = action.payload;
            return state.map(list => list.tasks.includes(todoToChangeStatus) ? { ...list, tasks: changeStatus(todoToChangeStatus, list.tasks) } : list);

        case 'ADD_TODO':
            const newTodoObj = rebaseTodo(action.payload, state);
            const listIdAddTo = newTodoObj.listId;
            return state.map(list => list.id === listIdAddTo ? { ...list, tasks: [...list.tasks, newTodoObj] } : list);

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