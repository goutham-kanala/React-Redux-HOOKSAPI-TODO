import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../redux/actions";

function TodoItem({ todo, id }) {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);
  const dispatch = useDispatch();
  const index = id - 1;
  return (
    <div>
      <div className="row mx-2 align-items-center">
        <div>{id}</div>
        <div className="col">
          {editable ? (
            <input
              type="text"
              value={name}
              className="form-control"
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
          ) : (
            <h4>{todo.todo}</h4>
          )}
        </div>
        <button
          className="btn btn-primary m-2"
          onClick={() => {
            setEditable(!editable);
            dispatch(updateTodo(index, name));
          }}
        >
          {editable ? "Update" : "Edit"}
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => dispatch(removeTodo(todo.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
