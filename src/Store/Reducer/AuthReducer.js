import { authAPI } from "../../API/API";
import { getTodoLists } from "./ToDoReducer";

const SET_USER_DATA = "AuthReducer/SET_USER_DATA";
const RESET_USER_DATA = "AuthReducer/RESET_USER_DATA";
const SET_INITIAL_APP = "AuthReducer/SET_INITIAL_APP";

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    ifInitialApp: false,
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.userData,
                isAuth: true,
            };
        case RESET_USER_DATA:
            return {
                ...state,
                id: null,
                login: null,
                email: null,
                isAuth: false,
            };
        case SET_INITIAL_APP:
            return {
                ...state,
                ifInitialApp: action.initialApp,
            };
        default:
            return state;
    }
};

const setUserData = (userData) => {
    return { type: SET_USER_DATA, userData };
};

const resetUserData = () => {
    return { type: RESET_USER_DATA };
};
const setInitialApp = (initialApp) => {
    return { type: SET_INITIAL_APP, initialApp };
};
export const getAuthData = () => async (dispatch) => {
    const resault = await authAPI.getAuthMe();
    if (resault.resultCode === 0) {
        dispatch(setUserData(resault.data));
    }
};

export const login = (data) => async (dispatch) => {
    const res = await authAPI.login(data);
    if (res.resultCode === 0) {
        dispatch(getAuthData());
    }
};

export const logout = () => async (dispatch) => {
    const res = await authAPI.loguot();
    if (res.resultCode === 0) {
        dispatch(resetUserData());
    }
};

export const initialApp = () => async (dispatch) => {
    const authMePromise = await dispatch(getAuthData());
    const todoListPromise = dispatch(getTodoLists());

    Promise.all([authMePromise, todoListPromise]).then(() => {
        dispatch(setInitialApp(true));
    });
};

export default AuthReducer;
