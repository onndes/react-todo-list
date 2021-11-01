import { authAPI } from "../../API/API";

const SET_USER_DATA = "AuthReducer/SET_USER_DATA";

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
        default:
            return state;
    }
};

const setUserData = (userData) => {
    return { type: SET_USER_DATA, userData };
};
export const getAuth = () => async (dispatch) => {
    const resault = await authAPI.getAuthMe();
    if (resault.resultCode === 0) {
        dispatch(setUserData(resault.data));
    }
};

export default AuthReducer;
