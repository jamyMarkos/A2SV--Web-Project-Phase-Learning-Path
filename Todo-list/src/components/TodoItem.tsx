// TodoItem.tsx
import './TodoItem.css'
import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggleCompletion: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onDelete,
  onToggleCompletion,
  onEdit,
}) => {
  const [editing, setEditing] = useState<boolean>(false);
  const [editedText, setEditedText] = useState<string>(todo.text);

  const handleToggleEdit = () => {
    setEditing(!editing);
    setEditedText(todo.text);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(event.target.value);
  };

  const handleSaveEdit = () => {
    onEdit(todo.id, editedText);
    setEditing(false);
  };

  return (
    <li>
      {editing ? (
        <div className='edit_container'>
          <input type="text" value={editedText} onChange={handleInputChange} />
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={handleToggleEdit} className='btn__cancel'>Cancel</button>
        </div>
      ) : (
        <>
          <span
            id='text'
            className={todo.completed ? 'completed' : ''}
            onClick={() => onToggleCompletion(todo.id)}
          >
            {todo.text}
          </span>
          <button onClick={handleToggleEdit}>Edit</button>
          <button onClick={() => onDelete(todo.id)} className='btn__del'>Delete</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;