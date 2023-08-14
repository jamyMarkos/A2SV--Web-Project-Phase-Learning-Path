// src/App.js
import React from "react";
import { Provider } from "react-redux";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import store from "./store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Task Manager</h1>
        <AddTask />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
