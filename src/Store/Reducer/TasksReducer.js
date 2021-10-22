import { taksksAPI } from "../../API/API";
import { todoAPI } from "./../../API/API";

const SET_TASKS_LIST = "TasksReducer/SET_TASKS_LIST";
const SET_SELECTED_TODO_ID = "TasksReducer/SET_SELECTED_TODO_ID";
const SET_ADD_TASK = "TasksReducer/SET_ADD_TASK";

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
                tasksList: [...state.tasksList, action.newTask],
            };
        default:
            return state;
    }
};

export const setTasksList = (tasks) => {
    return { type: SET_TASKS_LIST, tasks };
};
export const setSelectedToDoID = (id) => {
    return { type: SET_SELECTED_TODO_ID, id };
};
export const setAddTask = (newTask) => {
    return { type: SET_ADD_TASK, newTask };
};

export const getTasks = (order) => async (dispatch) => {
    const todoLists = await todoAPI.getTodoLists();
    const selectedTodo = todoLists.filter((item) => Math.abs(item.order) + 1 === +order);
    dispatch(setSelectedToDoID(selectedTodo[0].id));
    const resault = await taksksAPI.getTasks(selectedTodo[0].id);
    dispatch(setTasksList(resault.items));
};

export const addTask = (taskText) => async (dispatch, getState) => {
    const resault = await taksksAPI.createTask(getState().tasks.selectedTodoID, taskText);
    if (resault.resaultCode === 0) {
        dispatch(setAddTask(taskText));
    }
};

export default TasksReducer;
