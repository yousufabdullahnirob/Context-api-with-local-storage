import { createContext, useContext } from "react";

// 1. Create context
export const TodoContext = createContext();

// 2. Custom hook for easy usage
export const useTodo = () => useContext(TodoContext);
