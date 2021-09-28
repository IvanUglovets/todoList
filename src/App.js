import TodoList from "./TodoList/TodoList";
import Todo from "./Todo/Todo";
import TodoAdd from "./TodoAdd/TodoAdd";
import "./index.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col } from "react-bootstrap";

function App() {
  const [todo, setTodo] = useState([]);

  console.log(todo);
  return (
    <div className="App">
      <Todo todo={todo} />
      <TodoAdd todo={todo} setTodo={setTodo} />
      <Container>
        <Col>
          <TodoList todo={todo} setTodo={setTodo} />
        </Col>
      </Container>
    </div>
  );
}

export default App;
