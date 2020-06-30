import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}
export const initialaziedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initialazeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]) // all promises from array
        .then(() => {
            dispatch(initialaziedSuccess());
        });
}


export default appReducer;