import { combineReducers, applyMiddleware, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import thunkMiddleware from "redux-thunk";

import ToDoReducer from "./Reducer/ToDoReducer";
import TasksReducer from "./Reducer/TasksReducer";

const reducers = combineReducers({
    todo: ToDoReducer,
    form: formReducer,
    tasks: TasksReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
