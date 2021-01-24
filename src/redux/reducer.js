import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from "./actions";
import todos from "./states";
const reducer = (state = todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newtodo = state.slice();
      return [...newtodo, action.payload];

    case REMOVE_TODO:
      const newTodo = state.filter((todo) => todo.id !== action.payload);
      return newTodo;
    case UPDATE_TODO:
      const uptodo = state.slice();
      uptodo[action.payload.id].todo = action.payload.todo;
      return uptodo;

    default:
      return state;
  }
};

export default reducer;
