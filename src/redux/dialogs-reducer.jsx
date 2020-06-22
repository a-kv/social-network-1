const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Poli'},
        {id: 2, name: 'Mom'},
        {id: 3, name: 'Andrew'},
        {id: 4, name: 'Elvira'},
        {id: 5, name: 'Anastasiya'},
        {id: 6, name: 'Igor'}],
    messages: [
        {id: 1, message: 'Hey'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'}]

};
//ноушен

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}]
            };
        }
        default:
            return state;
    }
}
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;