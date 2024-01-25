import { useState } from "react";
import { useStore } from "../store/store";

export default function TodoInput() {
  const [inputValue, setInputValue] = useState("");
  const addTodo = useStore((state) => state.addTodo);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => addTodo(inputValue)} className="add-button">Add</button>
    </div>
  );
}
