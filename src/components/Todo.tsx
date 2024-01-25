import { Todo as TodoType, TodosState, useStore } from "../store/store";

export default function Todo({
  title,
  done,
  index,
}: TodoType & { index: number }) {
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
