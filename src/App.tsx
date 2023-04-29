import React, { useState } from 'react';
import logo from './logo.svg';
import style from './App.module.css';
import { Header } from './components/Header/Header';
import { TodoPanel } from './components/TodoPanel/TodoPanel';

const DEFAULT_TODO_LIST = [
  { id: 1, name: 'task_1', description: "tu-tu-du-du", checked: false },
  { id: 2, name: 'task_2', description: "bdassss", checked: true },
  { id: 3, name: 'task_3', description: "trun", checked: false }
];

function App() {
  const [todos, setTodos] = useState(DEFAULT_TODO_LIST)

  const addTodo = ({ name, description }: Omit<Todo, "id" | "checked">) => {
    setTodos([...todos, { id: todos[todos.length - 1].id + 1, description, name, checked: false }])
  }

  return (
    <div className={style.app_container}>
      <div className={style.container}>
        <Header todoCount={todos.length} />
        <TodoPanel addTodo={addTodo}/>
      </div>
    </div>
  );
}

export default App;
