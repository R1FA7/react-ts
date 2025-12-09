export type Todo = {
  text: string;
  isDone: boolean;
};

export type TodoProps = {
  todo: Todo;
  index: number;
  deleteTodo: (index: number) => void;
  toggleTodo: (index: number) => void;
};
