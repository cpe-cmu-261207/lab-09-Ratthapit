import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Todolist from "../components/Todolist";
import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";

export default function Lab07() {
  const [Todos, setTodos] = useState([]);

  const deleteTodo = (idx) => {
    Todos.splice(idx, 1);
    const newTodos = [...Todos];
    setTodos(newTodos);
  };

  const markTodo = (idx) => {
    Todos[idx].completed = !Todos[idx].completed;
    setTodos([...Todos]);
  };

  const moveUp = (idx) => {
    if (idx === 0) return;
    else {
      const saveTodo = Todos[idx].title;
      const saveCompleted = Todos[idx].completed;

      Todos[idx].title = Todos[idx - 1].title;
      Todos[idx - 1].title = saveTodo;

      Todos[idx].completed = Todos[idx - 1].completed;
      Todos[idx - 1].completed = saveCompleted;

      setTodos([...Todos]);
    }
  };

  const moveDown = (idx) => {
    if (idx === Todos.length) return;
    else {
      const saveTodo = Todos[idx].title;
      const saveCompleted = Todos[idx].completed;

      Todos[idx].title = Todos[idx + 1].title;
      Todos[idx + 1].title = saveTodo;

      Todos[idx].completed = Todos[idx + 1].completed;
      Todos[idx + 1].completed = saveCompleted;

      setTodos([...Todos]);
    }
  };

  const addTodo = (title, completed) => {
    setTodos([{ title: title, completed: completed }, ...Todos]);
  };

  const saveTodo = () => {
    const todosStr = JSON.stringify(Todos);
    localStorage.setItem("react-todos", todosStr);
  };

  useEffect(() => {
    const todosStr = localStorage.getItem("react-todos");
    if (!todosStr) setTodos([]);
    else setTodos(JSON.parse(todosStr));
  }, []);

  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    saveTodo();
  }, [Todos]);

  const handleInput = (event) => {
    if (event.key !== "Enter") return;
    if (event.key == "Enter") {
      if (event.target.value === "") {
        alert("Todo cannot be empty");
        return;
      }
      addTodo(event.target.value, false);
      event.target.value = "";
    }
  };

  return (
    <div>
      {/* Entire App container (required for centering) */}
      <div style={{ maxWidth: "700px" }} className="mx-auto">
        {/* App header */}
        <p className="display-4 text-center fst-italic m-4">
          Minimal Todo List <span className="fst-normal">☑️</span>
        </p>
        {/* Input */}
        <input
          className="form-control mb-1 fs-4"
          placeholder="insert todo here..."
          onKeyUp={handleInput}
        />

        {Todos.map((element, index) => (
          <Todolist
            title={element.title}
            completed={element.completed}
            onDelete={() => deleteTodo(index)}
            onMark={() => markTodo(index)}
            up={() => moveUp(index)}
            down={() => moveDown(index)}
          />
        ))}
        {/* summary section */}
        <p className="text-center fs-4">
          <span className="text-primary">All ({Todos.length}) </span>
          <span className="text-warning">
            Pending ({Todos.filter((x) => x.completed == false).length}){" "}
          </span>
          <span className="text-success">
            Completed ({Todos.filter((x) => x.completed == true).length})
          </span>
        </p>
        {/* Made by section */}
        <p className="text-center mt-3 text-muted fst-italic">
          made by Pimpitcha Kanitpanyajaroen 640610654
        </p>
      </div>
    </div>
  );
}
