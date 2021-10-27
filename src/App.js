import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";

function App() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <div className='App'>
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      <ul>
        <TodoList />
      </ul>
    </div>
  );
}

export default App;
