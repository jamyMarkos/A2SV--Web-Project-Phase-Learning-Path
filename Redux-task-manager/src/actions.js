// src/actions.js

// Action type constants for different tasks
export const ADD_TASK = "ADD_TASK"; // Action type for adding a new task
export const TOGGLE_TASK = "TOGGLE_TASK"; // Action type for toggling the completion status of a task
export const REMOVE_TASK = "REMOVE_TASK"; // Action type for removing a task
export const UPDATE_TASK = "UPDATE_TASK"; // Action type for updating the text of a task

// Action creator function to add a new task
export const addTask = (task) => ({
  type: ADD_TASK, // Action type is ADD_TASK
  payload: task, // Data associated with the action, in this case, the new task
});

// Action creator function to toggle the completion status of a task
export const toggleTask = (taskId) => ({
  type: TOGGLE_TASK, // Action type is TOGGLE_TASK
  payload: taskId, // Data associated with the action, in this case, the ID of the task to be toggled
});

// Action creator function to remove a task
export const removeTask = (taskId) => ({
  type: REMOVE_TASK, // Action type is REMOVE_TASK
  payload: taskId, // Data associated with the action, in this case, the ID of the task to be removed
});

// Action creator function to update the text of a task
export const updateTask = (taskId, newText) => ({
  type: UPDATE_TASK, // Action type is UPDATE_TASK
  payload: {
    // Data associated with the action, an object containing the task ID and new text
    id: taskId,
    newText,
  },
});
