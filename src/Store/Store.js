import { combineReducers, applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import ToDoReducer from "./Reducer/ToDoReducer";
import TasksReducer from "./Reducer/TasksReducer";
import AuthReducer from "./Reducer/AuthReducer";

const reducers = combineReducers({
    todo: ToDoReducer,
    tasks: TasksReducer,
    auth: AuthReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
