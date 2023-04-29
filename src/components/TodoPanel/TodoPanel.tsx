import React from "react";
import { Button } from "../Button/Button";
import style from "./TodoPanel.module.css"

const DEFAULT_TODO = {
  name: "",
  description: ""
}

interface TodoPanelProps {
  addTodo: ({ name, description }: Omit<Todo, "id" | "checked">) => void;
}

export const TodoPanel: React.FC<TodoPanelProps> = ({ addTodo }) => {
  const [todo, setTodo] = React.useState(DEFAULT_TODO);
  console.log('ffff', todo);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value })
  }

  const onClick = () => {
    addTodo({ name: todo.name, description: todo.description })
    setTodo(DEFAULT_TODO)
  }

  return <div className={style.todo_panel_container}>
    <div className={style.fields_container}>
      <div className={style.field_container}>
        <label htmlFor="name">
          <div>name</div>
          <input type="text" id="name" value={todo.name} name="name" onChange={onChange} />
        </label>
      </div>
      <div className={style.field_container}>
        <label htmlFor="name">
          <div>description</div>
          <input type="text" id="description" value={todo.description} name="description" onChange={onChange} />
        </label>
      </div>
      <div className={style.button_container}>
        <Button color="blue" onClick={onClick}>ADD</Button>
      </div>
    </div>
  </div>
}