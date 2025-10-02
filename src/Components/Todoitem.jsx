import { useTodo } from "../contexts/TodoContext";

export default function TodoItem({ todo }) {
  const { deleteTodo, toggleComplete } = useTodo();

  return (
    <div className={`flex items-center justify-between p-2 rounded ${todo.completed ? "line-through bg-gray-500" : "bg-purple-200"}`}>
      <div className="flex items-center gap-2">
        <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo.id)} />
        <span>{todo.todo.toString()}</span>
      </div>
      <div className="flex gap-2">
        <button onClick={() => deleteTodo(todo.id)} className="text-red-500 font-bold">✕</button>
      </div>
    </div>
  );
}
