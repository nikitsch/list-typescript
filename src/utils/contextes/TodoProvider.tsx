import React, { useState } from "react";
import { TodoContext } from "./TodoContext";

const DEFAULT_TODO_LIST = [
  { id: 1, name: 'task_1', description: "tu-tu-du-du", checked: false },
  { id: 2, name: 'task_2', description: "bdassss", checked: true },
  { id: 3, name: 'task_3', description: "trun", checked: false }
];

interface TodoProviderProps {
  children: React.ReactNode
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {

  const [todos, setTodos] = useState(DEFAULT_TODO_LIST)
  const [todoIdForEdit, setTodoIdForEdit] = useState<Todo["id"] | null>(null)

  const selectTodoIdForEdit = (id: Todo["id"]) => {
    setTodoIdForEdit(id)
  }

  const addTodo = ({ name, description }: Omit<Todo, "id" | "checked">) => {
    setTodos([...todos, { id: todos[todos.length - 1].id + 1, description, name, checked: false }])
  }

  const checkTodo = (id: Todo["id"]) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, checked: !todo.checked }
      }
      return todo
    }))
  }

  const deleteTodo = (id: Todo["id"]) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const changeTodo = ({ name, description }: Omit<Todo, "id" | "checked">) => {
    setTodos(todos.map(todo => {
      if (todo.id === todoIdForEdit) {
        return { ...todo, name, description }
      }
      return todo
    }))
    setTodoIdForEdit(null)
  }


  const value = React.useMemo(
    () => ({
      todos,
      todoIdForEdit,
      checkTodo,
      deleteTodo,
      selectTodoIdForEdit,
      changeTodo,
      addTodo
    }),
    [
      todos,
      todoIdForEdit,
      checkTodo,
      deleteTodo,
      selectTodoIdForEdit,
      changeTodo,
      addTodo
    ]
  )

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}