import { combineReducers, applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import ToDoReducer from "./Reducer/ToDoReducer";

const reducers = combineReducers({
    toDo: ToDoReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
