import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
const SET_USER_DATA = './auth-reducer/SET_USER_DATA';

let initialState = {
    usersId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}
export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.getAuth()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData()); // после логинизации еще раз запускаем getAuthUserData
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}));
        // в качестве общей для формы ошибки устанавливаем мессаджес, если массив больше нуля
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
        ; // если вылогинились удалается кука и нужно зачистить состояние и удалить всю информацию о юзере
    }
}

export default authReducer;