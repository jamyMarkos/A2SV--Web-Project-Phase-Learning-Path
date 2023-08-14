import { ADD_TASK, TOGGLE_TASK, REMOVE_TASK, UPDATE_TASK } from "./actions"; // Importing action types, including UPDATE_TASK

const initialState = {
  tasks: [], // Initial state with an empty array for tasks
};

// Reducer function to manage tasks state
export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      // Adding a new task to the tasks array in state
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case TOGGLE_TASK:
      // Toggling the completed status of a specific task
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case REMOVE_TASK:
      // Removing a specific task from the tasks array
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case UPDATE_TASK:
      // Updating the text of a specific task
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, text: action.payload.newText }
            : task
        ),
      };
    default:
      // Returning the current state for unhandled actions
      return state;
  }
};
