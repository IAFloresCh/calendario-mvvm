import React, { useState } from 'react';

// Model
const initialTodos = [
  { id: 1, title: 'Comprar leche', completed: false },
  { id: 2, title: 'Ir al gimnasio', completed: false },
  { id: 3, title: 'Hacer la compra', completed: false },
];

// ViewModel
const useTodoListViewModel = (initialTodos) => {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodoTitle, setNewTodoTitle] = useState('');

  const handleAddTodo = () => {
    const newTodo = { id: Date.now(), title: newTodoTitle, completed: false };
    setTodos([...todos, newTodo]);
    setNewTodoTitle('');
  };

  const handleToggleTodo = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const handleNewTodoTitleChange = (event) => {
    setNewTodoTitle(event.target.value);
  };

  return {
    todos,
    newTodoTitle,
    handleAddTodo,
    handleToggleTodo,
    handleDeleteTodo,
    handleNewTodoTitleChange,
  };
};

// View
const TodoList = ({ viewModel }) => {
  const { todos, newTodoTitle, handleAddTodo, handleToggleTodo, handleDeleteTodo, handleNewTodoTitleChange } = viewModel;

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} onChange={() => handleToggleTodo(todo.id)} />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.title}</span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input type="text" value={newTodoTitle} onChange={handleNewTodoTitleChange} />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    </div>
  );
};

// App
const App = () => {
  const viewModel = useTodoListViewModel(initialTodos);

  return <TodoList viewModel={viewModel} />;
};

export default App;