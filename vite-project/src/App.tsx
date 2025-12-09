import { useState } from "react";
import "./App.css";
import { TodoComponent } from "./components/TodoComponent";
import type { Todo } from "./types/todo";
function App() {
  const [searchKey, setSearchKey] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = () => {
    if (!searchKey.trim()) return;
    setTodos([...todos, { text: searchKey, isDone: false }]);
    setSearchKey("");
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, idx) => idx != index));
  };

  const toggleTodo = (index: number) => {
    setTodos(
      todos.map((todo, idx) =>
        idx === index ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Todo</h1>
      <div>
        <input
          type="text"
          style={{ marginRight: "5px" }}
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>

        {todos.map((todo, index) => (
          <TodoComponent
            key={index}
            todo={todo}
            index={index}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
