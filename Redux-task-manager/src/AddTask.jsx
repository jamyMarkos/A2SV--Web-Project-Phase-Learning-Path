// src/AddTask.js
import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "./actions";

// Functional component for adding tasks
const AddTask = ({ addTask }) => {
  // State to track the input text for the new task
  const [taskText, setTaskText] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    if (taskText.trim() !== "") {
      // If the task text is not empty or just whitespace
      addTask({
        id: Date.now(), // Generating a unique ID based on the current timestamp
        text: taskText, // The text content of the new task
        completed: false, // Initial completion status set to false
      });
      setTaskText(""); // Clearing the input field after task addition
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for entering task text */}
      <input
        type="text"
        placeholder="Enter task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)} // Updating taskText state as user types
      />
      {/* Button to submit the new task */}
      <button type="submit">Add Task</button>
    </form>
  );
};

// Mapping the addTask action creator to props using connect
const mapDispatchToProps = {
  addTask,
};

// Connecting the AddTask component to the Redux store
export default connect(null, mapDispatchToProps)(AddTask);
