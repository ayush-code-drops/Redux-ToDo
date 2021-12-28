import { ADD_TASK } from "./actionType";

export function addTask(payload) {
  return {
    type: ADD_TASK,
    payload
  };
}
