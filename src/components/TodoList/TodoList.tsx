import React from "react";
import { TodoPanel } from "../TodoPanel/TodoPanel";
import { TodoItem } from "./TodoItem/TodoItem";

interface TodoListProps {
  todos: Todo[]
  todoIdForEdit: Todo["id"] | null
  checkTodo: (id: Todo["id"]) => void
  deleteTodo: (id: Todo["id"]) => void
  selectTodoIdForEdit: (id: Todo["id"]) => void
  changeTodo: ({ name, description }: Omit<Todo, "id" | "checked">) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, todoIdForEdit, checkTodo, deleteTodo, selectTodoIdForEdit, changeTodo }) => (
  <div>
    {todos.map((todo) => {
      if (todo.id === todoIdForEdit) return (
        <TodoPanel key={todo.id}
          mode="edit"
          ediTodo={{ name: todo.name, description: todo.description }}
          changeTodo={changeTodo} />
      )
      return (
        <TodoItem key={todo.id}
          todo={todo}
          checkTodo={checkTodo}
          deleteTodo={deleteTodo}
          selectTodoIdForEdit={selectTodoIdForEdit} />
      )
    })}
  </div>
)