import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function TodoList() {
  let todos = useSelector((state) => state);

  return (
    <div className="my-4">
      {todos.map((todo, i) => {
        return <TodoItem key={i} todo={todo} id={i + 1} />;
      })}
    </div>
  );
}

export default TodoList;
