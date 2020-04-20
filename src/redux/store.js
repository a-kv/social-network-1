import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {                        // создаем объект store из ми
    // ра ооп и в него помещаем state
    _state: {
        profilePage: {
            newPostText: 'yo!',
            posts: [
                {id: 1, message: 'Hey, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post.', likesCount: 3},
                {id: 3, message: 'Puzan!', likesCount: 1345}]
        },
        dialogsPage: {
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

        },
        sidebar: {}
    }, // state - это свойство. приватно
    _callSubscriber() {                 // метод объекта
        console.log('state changed');
    },
    getState() {
        return this._state;              // this - пишется как обращение к свойству или методу объекта, и обозначения его принадлежности к данному объекту
    },
    // метод объекта
    subscribe(observer) {
        this._callSubscriber = observer; //паттерн наблюдатель .addEventListener
    },
    addMessage(messageMessage) {       // метод объекта
        let newMessage = {
            id: 7,
            message: this._state.dialogsPage.newMessageText
        };

        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageBody = '';

        // _callSubscriber(this._state);
    },     // метод объекта
    updateNewMessageText(newMessage) {
        this._state.dialogsPage.newMessageBody = newMessage;
        this._callSubscriber(this._state);
    }, // метод объекта

    dispatch(action) {   //  action - объект  должно быть свойство тип текст 'ADD-POST'
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPagePage = dialogReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
        }
}





export default store;
window.store = store;
