export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo
    }
}

export const editTodo = (todo) => {
    return {
        type: 'EDIT_TODO',
        payload: todo
    }
}

export const deleteTodo = (todo) => {
    return {
        type: 'DELETE_TODO',
        payload: todo
    }
}

export const toggleTodoCompletion = (todo) => {
    return {
        type: 'TOGGLE_TODO',
        payload: todo
    }
}