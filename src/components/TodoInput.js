import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { addTodo } from "../redux/actions";

function TodoInput(props) {
  let [name, setName] = useState("");

  const dispatch = useDispatch();
  return (
    <div>
      <div className="row m-2">
        <input
          type="text"
          className="col form-control"
          placeholder="Type in to add a task"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            dispatch(addTodo({ id: uuidv4(), todo: name }));
            setName("");
          }}
        >
          ADD TODO
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
