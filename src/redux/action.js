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

export const deleteTodo = (todoObj) => dispatch => {
  return fetchServer('Delete', todoObj)
    .then(res => {
      listStatusUpdate(todoObj.list_id)(dispatch);
      dispatch({
        type: 'DELETE_TODO',
        payload: res
      });
    });
}

export const addTodo = (todoObj) => dispatch => {
  return fetchServer('Post', todoObj)
    .then(res => {
      listStatusUpdate(res.list_id)(dispatch);
      dispatch({
        type: 'ADD_TODO',
        payload: res
      });
    });
}

export const changeTodoStatus = (todoObj) => dispatch => {
  fetchServer('Patch', todoObj)
    .then(res => {
      listStatusUpdate(res.list_id)(dispatch);
      dispatch({
        type: 'CHANGE_STATUS',
        payload: res
      });
    });
}