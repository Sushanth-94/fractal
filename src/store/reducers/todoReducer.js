const initialState = {
  todoList: [
    {
      id: 1,
      todo: "Click on add to add your todo",
      category: "instruction",
      completed: false,
    },
    {
      id: 2,
      todo: "Click on added todo to mark it as complete",
      category: "instruction",
      completed: false,
    },
    {
      id: 3,
      todo: "Click on x to delete your todo",
      category: "instruction",
      completed: false,
    },
    {
      id: 4,
      todo: "Complete assignment",
      category: "example",
      completed: true,
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "EDIT_TODO":
      const editedToggleList = state.todoList.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              todo: action.payload.todo,
              category: action.payload.category,
            }
          : todo
      );
      return {
        ...state,
        todoList: editedToggleList,
      };
    case "DELETE_TODO":
      const updatedList = state.todoList.filter((todo) => {
        return todo.id !== action.payload;
      });
      return {
        ...state,
        todoList: updatedList,
      };
    case "TOGGLE_TODO":
      const toggleList = state.todoList.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      return {
        ...state,
        todoList: toggleList,
      };
  }
  return state;
};
