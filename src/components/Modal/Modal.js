import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as todoAction from "../../store/actions/todoAction";
import "./Modal.css";

export default function Modal({ setModal, id }) {
  const [todo, setTodo] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const todos = useSelector((state) => state.todoList.todoList);
  useEffect(() => {
    if (id.length > 0) {
      const editTodo = todos.find((todo) => todo.id === id);
      setTodo(editTodo.todo);
      setCategory(editTodo.category);
    }
  }, [id, todos]);
  const dispatch = useDispatch();

  const addTodoHandler = () => {
    if (todo.length > 0 && category.length > 0) {
      const newTodo = {
        id: new Date().getTime(),
        todo,
        category,
        complete: false,
      };
      dispatch(todoAction.addTodo(newTodo));
      setModal();
    } else {
      setError("Todo and category is required ");
    }
  };

  const editTodoHandler = () => {
    if (todo.length > 0 && category.length > 0) {
      const newTodo = {
        id,
        todo,
        category,
        complete: false,
      };
      dispatch(todoAction.editTodo(newTodo));
      setModal();
    } else {
      setError("Todo and category is required ");
    }
  };

  return (
    <div className="modal">
      <input
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        placeholder="enter todo"
        className="margin"
      />
      <input
        onChange={(e) => setCategory(e.target.value.toLowerCase())}
        value={category}
        placeholder="enter category"
        className="margin"
      />
      <div className="margin btnWrapper">
        {id.length > 0 ? (
          <button className="confirmBtn" onClick={addTodoHandler}>
            Add
          </button>
        ) : (
          <button className="confirmBtn" onClick={editTodoHandler}>
            Edit
          </button>
        )}
        <button className="cancelBtn" onClick={() => setModal()}>
          Cancel
        </button>
      </div>
      {error.length > 0 && <div className="margin error">{error}</div>}
    </div>
  );
}
