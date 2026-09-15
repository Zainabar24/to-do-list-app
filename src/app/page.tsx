"use client";

import { useState } from "react";
import Zainab from "./component/todo";
type todo = {
  id: number;
  title: string;
  completed: boolean;
};

type filter = "all" | "active" | "completed";

export default function Home() {
  const [title, settitle] = useState("");
  const [filter, setfilter] = useState<filter>("all");
  const [todos, settodos] = useState<todo[]>([]);

  function AddTodo() {
    if (!title.trim()) return;

    const Task: todo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };

    settodos((prevTodos) => [...prevTodos, Task]);
    settitle("");
  }

  function DeleteTodo(id: number) {
    settodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );
  }

  function ToggleTodo(id: number) {
    settodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  const fTodo = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const active = todos.filter((todo) => !todo.completed).length;
  const completed = todos.filter((todo) => todo.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-50 to-green-200">
      

      <main className="mx-auto min-h-[calc(100vh-180px)] max-w-4xl px-4 py-10 sm:px-6">
        <section className="rounded-3xl border border-white/60 bg-white/45 p-5 shadow-xl shadow-green-900/10 backdrop-blur-xl sm:p-8">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-green-950">
              My <span className="text-emerald-600">Tasks</span>
            </h1>

            <p className="mt-2 text-green-700">
              Add or manage your tasks with ease
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              AddTodo();
            }}
            className="mb-6 flex overflow-hidden rounded-2xl border border-green-200/70 bg-white/60 shadow-sm backdrop-blur-md"
          >
            <input
              type="text"
              value={title}
              onChange={(e) => settitle(e.target.value)}
              placeholder="Add a new task..."
              className="min-w-0 flex-1 bg-transparent px-4 py-3 text-green-950 outline-none placeholder:text-green-600/60 focus:ring-2 focus:ring-inset focus:ring-emerald-400"
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-green-600 to-emerald-700 px-5 py-3 font-semibold text-white transition hover:from-green-700 hover:to-emerald-800"
            >
              Add Task
            </button>
          </form>

          <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-green-200/60 bg-green-100/70 p-4 text-center backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-wider text-green-700">
                Total Tasks
              </p>
              <p className="mt-1 text-2xl font-bold text-green-950">
                {todos.length}
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-200/60 bg-emerald-100/70 p-4 text-center backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                Active Tasks
              </p>
              <p className="mt-1 text-2xl font-bold text-emerald-950">
                {active}
              </p>
            </div>

            <div className="rounded-2xl border border-teal-200/60 bg-teal-100/70 p-4 text-center backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                Completed
              </p>
              <p className="mt-1 text-2xl font-bold text-teal-950">
                {completed}
              </p>
            </div>
          </div>

          <div className="mb-6 flex flex-wrap gap-2 rounded-2xl border border-green-200/60 bg-white/40 p-2 backdrop-blur-md">
            {(["all", "active", "completed"] as filter[]).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setfilter(item)}
                className={`rounded-xl px-4 py-2 text-sm font-semibold capitalize transition ${
                  filter === item
                    ? "bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-md shadow-green-700/20"
                    : "text-green-700 hover:bg-green-100"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {fTodo.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-green-300 bg-green-50/60 px-4 py-10 text-center text-green-700 backdrop-blur-md">
                No tasks found
              </div>
            ) : (
              fTodo.map((todo) => (
                <Zainab
                  key={todo.id}
                  todo={todo}
                  onToggle={ToggleTodo}
                  onDelete={DeleteTodo}
                />
              ))
            )}
          </div>
        </section>
      </main>

    </div>
  );
}