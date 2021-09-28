import React, { useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import '../index.css'
const TodoAdd = ({ todo, setTodo }) => {
  const [value, setValue] = useState("");

  function deleteTodo() {
    setTodo([]);
  }

  function addTodoKey(e) {
    if (value && e.key === "Enter") {
      setTodo([
        ...todo,
        { id: Math.floor(Math.random() * 100), title: value, completed: false },
      ]);
      setValue("");
    }
  }

  function addTodo() {
    if (value) {
      setTodo([
        ...todo,
        {
          id: Math.floor(Math.random() * 100),
          title: value,
          completed: false,
        },
      ]);
      setValue("");
    }
  }

  function sortTodoByAlpa() {
    let sortTodo = [...todo].sort((a, b) => a.id - b.id);
    setTodo(sortTodo);
  }

  return (
    <div className="add__todo">
      <FormControl
        type="text"
        placeholder="Ваше дело"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => addTodoKey(e)}
      />
      <Button className="btn__add" variant="primary" onClick={() => addTodo()}>
        Добавить
      </Button>
      <Button
        className="btn__delete"
        variant="primary"
        onClick={() => deleteTodo()}
      >
        Удалить все
      </Button>

      <Button className="sort__id" onClick={() => sortTodoByAlpa()}>Сортировка по id</Button>
    </div>
  );
};

export default TodoAdd;
