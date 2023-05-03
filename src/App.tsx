import React from 'react';
import logo from './logo.svg';
import style from './App.module.css';
import { Header } from './components/Header/Header';
import { TodoPanel } from './components/TodoPanel/TodoPanel';
import { TodoList } from './components/TodoList/TodoList';
import { TodoProvider } from './utils';

export const App = () => (
  // const [todos, setTodos] = useState(DEFAULT_TODO_LIST)
  // const [todoIdForEdit, setTodoIdForEdit] = useState<Todo["id"] | null>(null)

  // const selectTodoIdForEdit = (id: Todo["id"]) => {
  //   setTodoIdForEdit(id)
  // }

  // const addTodo = ({ name, description }: Omit<Todo, "id" | "checked">) => {
  //   setTodos([...todos, { id: todos[todos.length - 1].id + 1, description, name, checked: false }])
  // }

  // const checkTodo = (id: Todo["id"]) => {
  //   setTodos(todos.map(todo => {
  //     if (todo.id === id) {
  //       return { ...todo, checked: !todo.checked }
  //     }
  //     return todo
  //   }))
  // }

  // const deleteTodo = (id: Todo["id"]) => {
  //   setTodos(todos.filter(todo => todo.id !== id))
  // }

  // const changeTodo = ({ name, description }: Omit<Todo, "id" | "checked">) => {
  //   setTodos(todos.map(todo => {
  //     if (todo.id === todoIdForEdit) {
  //       return { ...todo, name, description }
  //     }
  //     return todo
  //   }))
  //   setTodoIdForEdit(null)
  // }

  <TodoProvider>
    <div className={style.app_container}>
      <div className={style.container}>
        <Header
        // todoCount={todos.length}
        />
        <TodoPanel mode="add"
        // addTodo={addTodo}
        />
        <TodoList
        // todos={todos}
        // todoIdForEdit={todoIdForEdit}
        // checkTodo={checkTodo}
        // deleteTodo={deleteTodo}
        // changeTodo={changeTodo} 
        // selectTodoIdForEdit={selectTodoIdForEdit}
        />
      </div>
    </div>
  </TodoProvider>
)