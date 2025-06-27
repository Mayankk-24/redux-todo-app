import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "./features/todo/todoSlice";

function App() {
  const [text, setText] = useState("");
  const [EditId, setEditId] = useState(null);
  const dispatch = useDispatch();
  const handleAddorEditTodo = () => {
    if (EditId) {
      dispatch(updateTodo({ id: EditId, text }));
      setEditId(null);
    } else {
      dispatch(addTodo(text));
    }
    setText("");
  };
  const handleEdit = (item) => {
    setEditId(item.id);
    setText(item.text)
  };
  return (
    <>
      <h1>Redux todo app</h1>
      <AddTodo
        text={text}
        setText={setText}
        handleAddorEditTodo={handleAddorEditTodo}
        EditId={EditId}
      />
      <ListTodo
        handleEdit={handleEdit}
      />
    </>
  );
}

export default App;
