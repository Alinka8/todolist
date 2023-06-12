import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoApp = () => {
  const [todo, setTodo] = useState({ text: "", id: "" });
  const [todoList, setTodoList] = useState([]);

  //save data when users types in into todo
  const onChangeHandler = (e) => {
    setTodo({ text: e.target.value, id: uuidv4() });
    // setTodo(e.target.value);
    // console.log("e.target.value", e.target.value);
  };

  //when user click add, we should add current todo to todoList

  const onClickHandler = () => {
    setTodoList([todo, ...todoList]);
    setTodo({ text: "", id: "" });
  };

  const onDeleteHandler = (todoId) => {
    console.log("delete clicked", todoId);
    const filteredList = todoList.filter((el) => el.id !== todoId);
    setTodoList(filteredList);
  };

  return (
    <div className="todo-app">
      <input
        value={todo.text}
        onChange={onChangeHandler}
        placeholder="type your todo"
        className="todo-app_input"
      />
      <button onClick={onClickHandler} className="todo-app__btn">
        Add
      </button>
      <div className="todo-app__list">
        {todoList.map((el, index) => {
          return (
            <div className="todo-app__list__item" key={index}>
              <span>{el.text}</span>
              {/* <span>{el.id}</span> */}
              <button onClick={() => onDeleteHandler(el.id)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoApp;
