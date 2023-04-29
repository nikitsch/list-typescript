import React from "react";
import style from "./Button.module.css"

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  color: "orange" | "blue" | "red"
}

export const Button: React.FC<ButtonProps> = ({ children, color, onClick, ...props }) => {
  const className = `${style.button} ${style[`button_${color}`]}`

  return <button className={className} onClick={onClick} {...props}>
    {children}
  </button>
}