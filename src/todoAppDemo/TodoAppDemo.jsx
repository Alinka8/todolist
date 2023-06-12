import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoDemo = () => {
  const [todo, setTodo] = useState({ text: "", id: "" });
  const [todoList, setTodoList] = useState([]);

  const onChangeHandler = (e) => {
    setTodo({ text: e.target.value, id: "" });
  };
  const onClickHandler = () => {
    setTodoList([{ ...todo, id: uuidv4() }, ...todoList]);
    console.log("clicked", setTodoList);
  };

  const onDeleteHandler = (todo)

  return (
    <div>
      <input
        //to make it controllable
        value={todo.text}
        onChange={onChangeHandler}
        placeholder="type your todo"
      ></input>
      <button onClick={onClickHandler}>Add</button>
      {todoList.map((todo, index) => {
        return (
          <div key={index}>
            <p>{todo.text}</p>
            <p>{todo.el}</p>
            <button onClick={() => onDeleteHandler(el.id)}>X</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoDemo;
