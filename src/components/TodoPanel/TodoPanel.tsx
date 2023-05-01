import React from "react";
import { Button } from "../Button/Button";
import style from "./TodoPanel.module.css"

const DEFAULT_TODO = {
  name: "",
  description: ""
}

interface AddTodoPanelProps {
  mode: "add"
  addTodo: ({ name, description }: Omit<Todo, "id" | "checked">) => void;
}

interface EditTodoPanelProps {
  mode: "edit"
  ediTodo: Omit<Todo, "id" | "checked">
  changeTodo: ({ name, description }: Omit<Todo, "id" | "checked">) => void;
}

type TodoPanelProps = AddTodoPanelProps | EditTodoPanelProps

export const TodoPanel: React.FC<TodoPanelProps> = (props) => {
  const isEdit = props.mode === "edit"

  const [todo, setTodo] = React.useState(isEdit ? props.ediTodo : DEFAULT_TODO);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value })
  }

  const onClick = () => {
    const todoItem = { name: todo.name, description: todo.description }
    if (isEdit) {
      return props.changeTodo(todoItem)
    }
    props.addTodo(todoItem)
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
        {!isEdit && (
          <Button color="blue" onClick={onClick}>ADD</Button>
        )}
        {isEdit && (
          <Button color="orange" onClick={onClick}>EDIT</Button>
        )}
      </div>
    </div>
  </div>
}