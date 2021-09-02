import fetchServer from '../services/method-collection';


export const getServer = () => dispatch => {
  fetchServer('GetListsAndStartList', 1)
    .then(res => {
      dispatch({
        type: 'GetLISTSAndStartLIST',
        payload: res
      })
    })
}

export const listStatusUpdate = (listId) => dispatch => {
  fetchServer('GetListsAndStartList', listId)
    .then(res => {
      dispatch({
        type: 'LIST_STATUS_UPDATED',
        payload: res
      })
    })
}

export const getTodayTasks = () => dispatch => {
  fetchServer('GetTodayTasks')
    .then(res => {
      dispatch({
        type: 'GET_TODAY_TASKS',
        payload: res
      })
    })
}

export const deleteTodo = todo => ({
  type: "DELETE_TODO",
  payload: todo
});

export const changeTodoStatus = todo => ({
  type: 'CHANGE_STATUS',
  payload: todo
});

// export const addTodo = todoObj => ({
  // type: 'ADD_TODO',
  // payload: todoObj
// });

export const addTodo = (todoObj) => dispatch => {
  fetchServer('Post', todoObj)
    .then(res => {
      dispatch({
        type: 'ADD_TODO',
        payload: res
      })
    })
}

