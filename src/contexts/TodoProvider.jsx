import { useState } from "react";
import { TodoContext } from "./TodoContext";

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), todo: text, completed: false };
    setTodos((prev) => {
      const updated = [newTodo, ...prev];
      localStorage.setItem("todos", JSON.stringify(updated));
      return updated;
    });
  };

  const updateTodo = (id, updatedText) => {
    setTodos((prev) => {
      const updated = prev.map((t) => (t.id === id ? { ...t, todo: updatedText } : t));
      localStorage.setItem("todos", JSON.stringify(updated));
      return updated;
    });
  };

  const deleteTodo = (id) => {
    setTodos((prev) => {
      const updated = prev.filter((t) => t.id !== id);
      localStorage.setItem("todos", JSON.stringify(updated));
      return updated;
    });
  };

  const toggleComplete = (id) => {
    setTodos((prev) => {
      const updated = prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      );
      localStorage.setItem("todos", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      {children}
    </TodoContext.Provider>
  );
};
