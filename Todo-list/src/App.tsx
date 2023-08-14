// App.tsx

import React, { useState } from 'react';

import './App.css';
import TodoItem from './components/TodoItem';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() === '') return;
    const newTodo: Todo = {
      id: new Date().getTime(),
      text: inputText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputText('');
  };

  const handleToggleCompletion = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id: number, newText: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText, editing: false } : todo
      )
    );
  };

  return (
    <div className="App">
      <h1>Taskify</h1>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter todo..."
        />
        <button onClick={handleAddTodo} className='btn__add'>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDeleteTodo}
            onToggleCompletion={handleToggleCompletion}
            onEdit={handleEditTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;