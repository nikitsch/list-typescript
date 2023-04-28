import React from "react";
import style from "./Header.module.css"

interface HeaderProps {
  todoCount: number
}

export const Header: React.FC<HeaderProps> = ({ todoCount }) => (
  <div className={style.header_container}>
    <div className={style.header_title}>
      Todo list <b>{todoCount}</b> task(s)
    </div>
  </div>
)