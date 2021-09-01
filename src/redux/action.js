


export const deleteTodo = todo => ({
  type: "DELETE_TODO",
  payload: todo
});

export const changeTodoStatus = todo => ({
  type: "CHANGE_STATUS",
  payload: todo
});

export const addTodo = todoObj => ({
  type: "ADD_TODO",
  payload: todoObj
});

export const listStatusUpdate = list => ({
  type: "LIST_STATUS_UPDATED",
  payload: list
});