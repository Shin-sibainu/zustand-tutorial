import { create } from "zustand";

export type Todo = { title: string; done?: boolean };

export type TodosState = {
  todos: Todo[];
  addTodo: (title: string) => void;
  remove: (index: number) => void;
  toggleDone: (index: number) => void;
};

const useStore = create<TodosState>((set) => ({
  todos: [],
  addTodo: (title: string) =>
    set((state) => ({ todos: [...state.todos, { title }] })),
  toggleDone: (index: number) =>
    set((state) => ({
      todos: state.todos.map((todo, id) => {
        if (index !== id) {
          return todo;
        }
        return { ...todo, done: !todo.done };
      }),
    })),
  remove: (index: number) =>
    set((state) => ({
      todos: state.todos.filter((_todo, id) => id !== index),
    })),
}));

export { useStore };
