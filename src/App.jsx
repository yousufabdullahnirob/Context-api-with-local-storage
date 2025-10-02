import { TodoProvider } from "./contexts/TodoProvider";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <TodoProvider>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            <TodoItemList />
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

// Separate component to render todo items
import { useTodo } from "./contexts/TodoContext";

function TodoItemList() {
  const { todos } = useTodo();
  return todos.map((todo) => (
    <div key={todo.id} className="w-full">
      <TodoItem todo={todo} />
    </div>
  ));
}

export default App;
