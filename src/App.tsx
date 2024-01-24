import { useState } from "react";
import "./App.css";
import { TodosState, useStore, Todo as TodoType } from "./store/store";
//https://www.ankurkedia.com/blog/state-management-zustand

function Todo({ title, done, index }: TodoType & { index: number }) {
  const toggleComplete = useStore((state: TodosState) => state.toggleDone);
  const remove = useStore((state: TodosState) => state.remove);
  return (
    <div className="todo">
      <input
        type="checkbox"
        checked={done}
        onChange={() => {
          toggleComplete(index);
        }}
      />
      <div className={done ? "done" : ""}>{title}</div>
      <button className="delete-button" onClick={() => remove(index)}>
        Delete
      </button>
    </div>
  );
}

function TodoList() {
  const todos = useStore((state) => state.todos);
  return (
    <div className="todos">
      {todos.map(({ title, done }: TodoType, index: number) => (
        <Todo
          title={title}
          done={done}
          index={index}
          key={`todo-${title}-${index}`}
        />
      ))}
    </div>
  );
}

function TodoInput() {
  const [inputValue, setInputValue] = useState("");
  const addTodo = useStore((state) => state.addTodo);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => addTodo(inputValue)}>Add</button>
    </div>
  );
}

function App() {
  return (
    <>
      <div className="main">
        <div>
          <TodoList />
          <TodoInput />
        </div>
      </div>
    </>
  );
}

export default App;
