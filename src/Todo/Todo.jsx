import React from "react";
import "../index.css";

const Todo = ({ todo }) => {
  return (
    <header className="header">
      <h3 className="title__todo">Список задач: {todo.length}</h3>
    </header>
  );
};

export default Todo;
