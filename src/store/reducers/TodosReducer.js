const initialState = {
    items: [],
    item: {
        id: '',
        title: '',
    }
};

const changeTitle = (state, action) => {
    return {
        ...state,
        item: {
            ...state.item,
            title: action.payload
        }
    }
}

const changeUpdateState = (state, action) => {
    let newList = [...state.items];
    for (let i = 0; i < newList.length; i++) {
        if (newList[i].id === action.payload) {
            newList[i].updating = !newList[i].updating;
            newList[i].updateTitle = '';
        }
    }
    return {
        ...state,
        items: newList
    }
}

const addToDo = (state, action) => {
    return {
        ...state,
        items: [
            ...state.items,
            action.payload
        ],
        item: {
            ...state.item,
            title: '',
        }
    }
}

const deleteToDo = (state, action) => {
    let newList = state.items.filter(item => {
        return item.id !== action.payload;
    });
    return {
        ...state,
        items: newList
    }
}

const updateToDo = (state, action) => {
    let newList = [...state.items];
    for (let i = 0; i < newList.length; i++) {
        if (newList[i].id === action.payload.id) {
            newList[i] = action.payload;
        }
    }
    return {
        ...state, 
        items: newList
    }
}

const actionHandler = {
    'CHANGE_TITLE': changeTitle,
    'ADD_TODO': addToDo,
    'DELETE_TODO': deleteToDo,
    'UPDATE_TODO': updateToDo,
    'CHANGE_UPDATE_STATE': changeUpdateState,
}

const todosReducer = (state = initialState, action) => {
    const handler = actionHandler[action.type];

    return handler ? handler(state, action) : state;
}

export default todosReducer;