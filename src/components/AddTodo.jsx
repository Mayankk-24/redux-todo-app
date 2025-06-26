import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    dispatch(addTodo(text));
    setText("");
  };
  return (
    <>
      <div className="flex gap-3 py-5">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter Text here.."
          className="py-4 px-10 rounded-lg ring-2 ring-red-400 focus:ring-red-400"
        />
        <button className="bg-blue-600" onClick={handleAddTodo}>
          Add todo
        </button>
      </div>
    </>
  );
}

export default AddTodo;
