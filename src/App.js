import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as todoAction from "./store/actions/todoAction";
import Modal from "./components/Modal/Modal";
import TodoList from "./components/todoList/TodoList";
import "./App.css";

const App = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [editId, setEditId] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoList.todoList);
  const modifiedTodoList = todos.reduce((accumulator, object) => {
    const key = object["category"];
    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    accumulator[key].push(object);
    return accumulator;
  }, {});
  const categories = Object.keys(modifiedTodoList);

  const popUpHandler = () => {
    setShowPopUp(!showPopUp);
    setEditId('')
  };
  const deleteHandler = (id) => {
    dispatch(todoAction.deleteTodo(id));
  };
  const toggleHandler = (id) => {
    dispatch(todoAction.toggleTodoCompletion(id));
  };
  const editHandler = (id) => {
    popUpHandler()
    setEditId(id)
  }
  return (
    <>
      <h1 className="txtAlign">Todos</h1>
      <div className="txtAlign">
        <button className="addBtn" onClick={popUpHandler}>
          Add your todo
        </button>
      </div>
      <div className="listContainer">
        <span>List of todos</span>
        <div>
          {categories.map((category) => {
            return (
              <div key={category}>
                <div className="category">{category}</div>
                {modifiedTodoList[category].map((todo) => {
                  return (
                    <TodoList
                      key={todo.id}
                      todo={todo}
                      deleteHandler={deleteHandler}
                      toggleHandler={toggleHandler}
                      editHandler={editHandler}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      {showPopUp && <Modal setModal={popUpHandler} id={editId} />}
    </>
  );
};

export default App;
