import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from "./actionType";

const initState = {
  todos: []
};
export function reducer(state = initState, { type, payload }) {
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        todos: [...state.todos, payload]
      };
    case DELETE_TASK:
      return {
        ...state,
        todos: state.todos?.filter((item) => item.id !== payload.id)
      };
    case TOGGLE_TASK:
      return {
        ...state,
        todos: state.todos?.map((item) => {
          return item.id === payload.id
            ? { ...item, status: !item.status }
            : item;
        })
      };
    default:
      return state;
  }
}
