import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

const TodoList = ({ todo, setTodo }) => {
  function deleteTodo(id) {
    let newTodo = todo.filter((item) => item.id !== id);
    setTodo(newTodo);
  }
  function todoCompleted(id) {
    let newTodo = todo.filter((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTodo(newTodo);
  }

  return (
    <div className="todo">
      <ul className="todo__list">
        {todo.map((todo, index) => (
          <div
            key={`${todo.id}__${todo.title}__${index}`}
            className="todo__list-wrapper"
          >
            <li
              className={
                todo.completed ? "todo__list-item completed" : "todo__list-item"
              }
            >
              {todo.id} : {todo.title}
            </li>
            <Button
              className="btn__secondary"
              variant="primary"
              onClick={() => deleteTodo(todo.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
            <Button
              className="btn__secondary"
              variant="primary"
              onClick={() => todoCompleted(todo.id)}
            >
              {todo.completed ? (
                <FontAwesomeIcon icon={faTimes} />
              ) : (
                <FontAwesomeIcon icon={faCheck} />
              )}
            </Button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
