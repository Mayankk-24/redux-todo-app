import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function ListTodo({handleEdit}) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      {todos.map((item, index) => {
        return (
          <div key={index} className="flex items-center justify-between py-2">
            <li className="font-semibold text-xl">{item.text}</li>
            <div className="flex gap-x-2 items-center">
              <button className="bg-green-600" onClick={() => handleEdit(item)}>Update todo</button>
              <button
                className="bg-red-600"
                onClick={() => dispatch(removeTodo(item.id))}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ListTodo;
