import { combineReducers } from 'redux';

import todosReducer from './TodosReducer';

const rootReducer = combineReducers ({
    todos: todosReducer
});

export default rootReducer;