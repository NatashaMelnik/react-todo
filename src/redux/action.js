
export const addTodo = todo => ({
  type: "ADD_TODO",
  payload: todo
});

export const deleteTodo = todo => ({
  type: "DELETE_TODO",
  payload: todo
});

