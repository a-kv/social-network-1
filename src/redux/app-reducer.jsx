import {getAuthUserData} from "./auth-reducer";

const INITIALAZIED_SUCCESS = 'INITIALAZIED_SUCCESS';


let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALAZIED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}
export const initialaziedSuccsess = () => ({type: INITIALAZIED_SUCCESS})

export const initialazeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]) // all promises from array
        .then(() => {
            dispatch(initialaziedSuccsess());
        });
}


export default appReducer;