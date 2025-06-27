import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo({ text, setText, handleAddorEditTodo, EditId }) {
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
        <button className={`${EditId ? "bg-green-600" : "bg-blue-600"}`} onClick={handleAddorEditTodo}>
          {EditId ? "Update todo" : "Add todo"}
        </button>
      </div>
    </>
  );
}

export default AddTodo;
