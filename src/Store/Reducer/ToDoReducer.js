import { todoAPI } from "../../API/API";

const SET_TODO_LISTS = "ToDoReducer/SET_DOTO_LISTS";
const ADD_TODO_LIST = "ToDoReducer/ADD_TODO_LIST";

const initialState = {
    todoLists: null,
};

const ToDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODO_LISTS:
            return {
                ...state,
                todoLists: action.todoLists,
            };
        case ADD_TODO_LIST:
            return {
                ...state,
                todoLists: [...state.todoLists, action.titleNewTodoList],
            };
        default:
            return state;
    }
};

const setToDoLists = (todoLists) => {
    return { type: SET_TODO_LISTS, todoLists };
};
const addToDoList = (titleNewTodoList) => {
    return { type: ADD_TODO_LIST, titleNewTodoList };
};

export const getTodoLists = () => async (dispatch) => {
    const resault = await todoAPI.getTodoLists();  
    dispatch(setToDoLists(resault));
};

export const createTodoList = (title) => async (dispatch) => {
    const resault = await todoAPI.createTotoList(title);
    if (resault.data === 0) {
        dispatch(addToDoList(title));
    }
};

export default ToDoReducer;
