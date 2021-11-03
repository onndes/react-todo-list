import { authAPI } from "../../API/API";

const SET_USER_DATA = "AuthReducer/SET_USER_DATA";
const RESET_USER_DATA = "AuthReducer/RESET_USER_DATA";

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
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
export default AuthReducer;
