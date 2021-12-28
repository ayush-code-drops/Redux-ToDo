import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from "./actionType";

export function addTask(payload) {
  return {
    type: ADD_TASK,
    payload
  };
}

export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    payload: {
      id: id
    }
  };
}

export function toggleTask(id) {
  return {
    type: TOGGLE_TASK,
    payload: {
      id: id
    }
  };
}
