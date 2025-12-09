import type { TodoProps } from "../types/todo";

export function TodoComponent({
  todo,
  index,
  deleteTodo,
  toggleTodo,
}: TodoProps) {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => toggleTodo(index)}
      ></input>
      <p style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>
        {todo.text}
      </p>
      <p
        style={{ border: "1px solid red", padding: "2px", cursor: "pointer" }}
        onClick={() => deleteTodo(index)}
      >
        delete
      </p>
    </div>
  );
}
