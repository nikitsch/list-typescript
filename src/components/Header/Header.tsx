import React from "react";
import { useTodo } from "../../utils";
import style from "./Header.module.css"

// interface HeaderProps {
//   todoCount: number
// }

export const Header: React.FC = () => {
  const { todos } = useTodo()
  return (
    <div className={style.header_container}>
      <div className={style.header_title}>
        Todo list <b>{todos.length}</b> task(s)
      </div>
    </div>
  )
}