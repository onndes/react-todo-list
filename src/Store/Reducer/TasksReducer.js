import { taksksAPI } from "../../API/API";
import { todoAPI } from "./../../API/API";

const SET_TASKS_LIST = "TasksReducer/SET_TASKS_LIST";
const SET_SELECTED_TODO_ID = "TasksReducer/SET_SELECTED_TODO_ID";
const SET_ADD_TASK = "TasksReducer/SET_ADD_TASK";
const DELETE_TASKS_LIST = "TasksReducer/DELETE_TASKS_LIST";
const RENAME_TASKS_LIST = "TasksReducer/RENAME_TASKS_LIST";

const initialState = {
    tasksList: null,
    selectedTodoID: null,
};

const TasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS_LIST:
            return {
                ...state,
                tasksList: action.tasks,
            };
        case SET_SELECTED_TODO_ID:
            return {
                ...state,
                selectedTodoID: action.id,
            };
        case SET_ADD_TASK:
            return {
                ...state,
                tasksList: [action.newTask, ...state.tasksList],
            };
        case DELETE_TASKS_LIST:
            return {
                ...state,
                tasksList: state.tasksList.filter((item) => item.id !== action.taskId),
            };
        case RENAME_TASKS_LIST:
            return {
                ...state,
                tasksList: state.tasksList.map((item) => {
                    if (item.id === action.taskId) {
                        return {
                            ...item,
                            title: action.newTitle,
                        };
                    }
                    return item;
                }),
            };
        default:
            return state;
    }
};

export const setTasksList = (tasks) => {
    return { type: SET_TASKS_LIST, tasks };
};
export const setSelectedToDoId = (id) => {
    return { type: SET_SELECTED_TODO_ID, id };
};
export const setAddTask = (newTask) => {
    return { type: SET_ADD_TASK, newTask };
};
const deleteTaskAC = (taskId) => {
    return { type: DELETE_TASKS_LIST, taskId };
};
const renameTaskAC = (taskId, newTitle) => {
    return { type: RENAME_TASKS_LIST, taskId, newTitle };
};

export const getTasks = (order) => async (dispatch) => {
    const todoLists = await todoAPI.getTodoLists();
    const selectedTodo = todoLists.filter((item) => Math.abs(item.order) + 1 === +order);
    const resault = await taksksAPI.getTasks(selectedTodo[0].id);
    dispatch(setSelectedToDoId(selectedTodo[0].id));
    dispatch(setTasksList(resault.items));
};

export const addTask = (taskText) => async (dispatch, getState) => {
    const resault = await taksksAPI.createTask(getState().tasks.selectedTodoID, taskText);
    console.log(resault);
    console.log(resault.resultCode);
    if (resault.resultCode === 0) {
        dispatch(setAddTask(resault.data.item));
    }
};
export const deleteTask = (taskId) => async (dispatch, getState) => {
    const resault = await taksksAPI.deleteTaskList(getState().tasks.selectedTodoID, taskId);
    if (resault.data.resultCode === 0) {
        dispatch(deleteTaskAC(taskId));
    }
};
export const renameTask = (taskId, title) => async (dispatch, getState) => {
    const resault = await taksksAPI.renameTaskList(getState().tasks.selectedTodoID, taskId, title);
    if (resault.data.resultCode === 0) {
        dispatch(renameTaskAC(taskId, title));
    }
};

export default TasksReducer;
