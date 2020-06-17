import {authAPI, usersAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    usersId: null,
    email: null,
    login: null,
    isAuth: false
};

const auhtReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}, userId})

export const getAuthUserData = (userId) => {
    return (dispatch) => {
        authAPI.getAuth(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserData(id, email, login));
                }
            });

    }
}

export default auhtReducer;