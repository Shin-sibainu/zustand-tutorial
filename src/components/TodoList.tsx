import { Todo as TodoType, useStore } from "../store/store";
import Todo from "./Todo";

export default function TodoList() {
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
