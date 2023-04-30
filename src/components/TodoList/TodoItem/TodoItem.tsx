import React from "react"
import { Button } from "../../Button/Button";
import style from "./TodoItem.module.css"

interface TodoItemProps {
  todo: Todo
  checkTodo: (id: Todo["id"]) => void
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, checkTodo }) => {

  return <div className={style.todo_item_container}>
    <div>
      <div aria-hidden className={style.todo_item_title}
        style={{
          opacity: todo.checked ? 0.5 : 1,
          textDecoration: todo.checked ? "line-through" : "none"
        }}
        onClick={() => checkTodo(todo.id)}>
        {todo.name}
      </div>
      <div aria-hidden className={style.todo_item_description}>
        {todo.description}
      </div>
    </div>
    <div className={style.todo_item_button_container}>
      <Button color="orange">EDIT</Button>
      <Button color="red">DELETE</Button>
    </div>
  </div>
}