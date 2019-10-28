export const changeTitle = (title) => {
    return { type: 'CHANGE_TITLE', payload: title };
}

export const changeUpdateState = (id) => {
    return { type: 'CHANGE_UPDATE_STATE', payload: id };
}

export const addTodo = (todo) => {
    return { type: 'ADD_TODO', payload: todo };
}

export const deleteTodo = (id) => {
    return { type: 'DELETE_TODO', payload: id };
}

export const updateTodo = (todo) => {
    return { type: 'UPDATE_TODO', payload: todo };
}