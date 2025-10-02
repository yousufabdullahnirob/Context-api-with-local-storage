import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

export default function TodoForm() {
  const [text, setText] = useState("");
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write Todo..."
        className="flex-1 rounded p-2 text-black"
      />
      <button type="submit" className="bg-black text-white px-4 rounded">
        Add
      </button>
    </form>
  );
}
