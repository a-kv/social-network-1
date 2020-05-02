const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
        newMessageBody: 'yo!',
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

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            break;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 7, message: body});
            break;
        default:
            return state;
    }

    return state;
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;