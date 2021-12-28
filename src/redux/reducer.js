import { ADD_TASK } from "./actionType";

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
    default:
      return state;
  }
}
