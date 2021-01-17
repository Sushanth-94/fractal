import React from "react";
import "./TodoList.css";

const TodoList = ({ todo, editHandler, deleteHandler, toggleHandler }) => {
  const todoStyle = todo.completed ? "todo completed" : "todo";
  return (
    <div key={todo.id} className="listStyle">
      <span onClick={() => toggleHandler(todo.id)} className={todoStyle}>
        {todo.todo}
      </span>
      <div>
        <span className="deleteTodo editTodo" onClick={() => editHandler(todo.id)}>
          Edit
        </span>
        <span className="deleteTodo" onClick={() => deleteHandler(todo.id)}>
          x
        </span>
      </div>
    </div>
  );
};

export default TodoList;
