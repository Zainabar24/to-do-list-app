"use client"

import Image from "next/image";
import { useState } from "react";
import Zainab from "./component/todo";

type todo = {
  id: number;
  title: string;
  completed: boolean;
};

type filter ="all" | "active" | "completed";

export default function Home() {

const [title, settitle] = useState("");
const [filter, setfilter] = useState<filter>("all");
const [todos, settodos] = useState<todo[]>([]);

function AddTodo(){

  if (!title.trim()) return;

  const Task: todo = {
    id: Date.now(),
    title: title.trim(),
    completed: false
  };

  settodos((prevTodos) => [...prevTodos, Task]);
  settitle("");
}

function DeleteTodo(id: number) {
  settodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));  
}

function ToggleTodo(id: number) {
  settodos((prevTodos) =>
    prevTodos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
  
}
