import { todoAPI } from "../../API/API";

const SET_TODO_LISTS = "ToDoReducer/SET_DOTO_LISTS";
const ADD_TODO_LIST = "ToDoReducer/ADD_TODO_LIST";
const DELETE_TODO_LIST = "ToDoReducer/DELETE_TODO_LIST";
const RENAME_TODO_LIST = "ToDoReducer/RENAME_TODO_LIST";
const SET_ID_SELECTED_TODO = "ToDoReducer/SET_ID_SELECTED_TODO";
const SET_LOADING = "ToDoReducer/SET_LOADING";
const SET_LOADING_UPDATE = "ToDoReducer/SET_LOADING_UPDATE";
const REORDER_TODO = "ToDoReducer/REORDER_TODO";

const initialState = {
    todoLists: null,
    idSelectedTodoList: null,
    maxTodo: 10,
    isLoading: false,
    isLoadingUpdate: false,
    loadingId: null,
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
                todoLists: [action.titleNewTodoList, ...state.todoLists],
            };
        case DELETE_TODO_LIST:
            return {
                ...state,
                todoLists: state.todoLists.filter((item) => item.id !== action.todoId),
            };
        case RENAME_TODO_LIST:
            return {
                ...state,
                todoLists: state.todoLists.map((item) => {
                    if (item.id === action.todoId) {
                        return {
                            ...item,
                            title: action.newTitle,
                        };
                    }
                    return item;
                }),
            };
        case SET_ID_SELECTED_TODO:
            return {
                ...state,
                idSelectedTodoList: action.todoId,
            };
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            };
        case SET_LOADING_UPDATE:
            return {
                ...state,
                isLoadingUpdate: action.isLoadingUpdate,
                loadingId: action.loadingId,
            };
        case REORDER_TODO:
            return {
                ...state,
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
const deleteToDoList = (todoId) => {
    return { type: DELETE_TODO_LIST, todoId };
};
const renameToDoList = (todoId, newTitle) => {
    return { type: RENAME_TODO_LIST, todoId, newTitle };
};

const setLoading = (isLoadingUpdate) => {
    return { type: SET_LOADING, isLoadingUpdate };
};
const setLoadingUpdate = (isLoadingUpdate, loadingId = null) => {
    return { type: SET_LOADING_UPDATE, isLoadingUpdate, loadingId };
};

export const setIdSelectedTodoList = (todoId) => {
    return { type: SET_ID_SELECTED_TODO, todoId };
};
const reorderTodoListAC = (todoId, afterTodo) => {
    return { type: REORDER_TODO, todoId, afterTodo };
};

export const getTodoLists = () => async (dispatch) => {
    dispatch(setLoading(true));
    const resault = await todoAPI.getTodoLists();
    dispatch(setToDoLists(resault));
    dispatch(setLoading(false));
};

export const createTodoList = (title) => {
    return async (dispatch) => {
        const resault = await todoAPI.createTotoList(title);
        if (resault.data.resultCode === 0) {
            dispatch(addToDoList(resault.data.data.item));
        }
    };
};

export const deleteTodoList = (todoId) => async (dispatch) => {
    dispatch(setLoadingUpdate(true, todoId));
    const resault = await todoAPI.deleteTotoList(todoId);
    if (resault.data.resultCode === 0) {
        dispatch(deleteToDoList(todoId));
    }
    dispatch(setLoadingUpdate(false));
};
export const renameTodoList = (todoId, title) => async (dispatch) => {
    dispatch(setLoadingUpdate(true, todoId));
    const resault = await todoAPI.renameTotoList(todoId, title);
    if (resault.data.resultCode === 0) {
        dispatch(renameToDoList(todoId, title));
    }
    dispatch(setLoadingUpdate(false));
};
export const reorderTodoList = (todoId, afterTodo) => async (dispatch) => {
    const resault = await todoAPI.reorderTodoList(todoId, afterTodo);
    if (resault.data.resultCode === 0) {
        dispatch(reorderTodoListAC(todoId, afterTodo));
    }
};

export default ToDoReducer;
