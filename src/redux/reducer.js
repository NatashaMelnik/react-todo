// start

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
            return state;

        case 'CHANGE_STATUS':
            return state;

        case 'ADD_TODO':
            return state;

        default:
            return state;
    }
};


