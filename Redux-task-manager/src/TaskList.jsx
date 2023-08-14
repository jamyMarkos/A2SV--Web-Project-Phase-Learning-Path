import React, { useState } from "react";
import { connect } from "react-redux";
import { toggleTask, removeTask, updateTask } from "./actions";

// Component to display a list of tasks
const TaskList = ({ tasks, toggleTask, removeTask, updateTask }) => {
  // State to track the task currently being edited
  const [editTaskId, setEditTaskId] = useState(null);
  // State to hold the edited task text
  const [editedTaskText, setEditedTaskText] = useState("");

  // Handler for the "Edit" button click
  const handleEditClick = (taskId, taskText) => {
    setEditTaskId(taskId); // Set the ID of the task being edited
    setEditedTaskText(taskText); // Set the initial edited task text
  };

  // Handler for the "Save" button click during task editing
  const handleEditSubmit = (taskId) => {
    updateTask(taskId, editedTaskText); // Dispatch the updateTask action
    setEditTaskId(null); // Clear the task being edited
    setEditedTaskText(""); // Clear the edited task text
  };

  return (
    <ul style={{ listStyleType: "none" }}>
      {tasks.map((task) => (
        <li key={task.id}>
          {/* Checkbox to toggle task completion status */}
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)} // Dispatch toggleTask action
          />
          {/* Conditional rendering for task editing */}
          {editTaskId === task.id ? (
            <>
              {/* Input for editing the task text */}
              <input
                type="text"
                value={editedTaskText}
                onChange={(e) => setEditedTaskText(e.target.value)}
              />
              {/* "Save" button for saving the edited task */}
              <button onClick={() => handleEditSubmit(task.id)}>Save</button>
            </>
          ) : (
            <>
              {/* Display task text */}
              {task.text}
              {/* "Edit" button to start editing the task */}
              <button
                onClick={() => handleEditClick(task.id, task.text)}
                style={{ marginLeft: "1rem" }}
              >
                Edit
              </button>
              {/* "Delete" button to remove the task */}
              <button
                onClick={() => removeTask(task.id)}
                style={{ marginLeft: "1rem" }}
              >
                Delete
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

// Mapping state from the Redux store to component props
const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

// Mapping action creators to component props
const mapDispatchToProps = {
  toggleTask,
  removeTask,
  updateTask,
};

// Connecting the TaskList component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
