import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
//https://www.ankurkedia.com/blog/state-management-zustand

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
