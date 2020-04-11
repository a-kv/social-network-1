let renderEntireTree = () => {
    console.log('State changed')
}

let state = {
    profilePage: {
        newPostText: 'yo!',
        posts: [
            {id: 1, message: 'Hey, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post.', likesCount: 3},
            {id: 3, message: 'Puzan!', likesCount: 1345}]
    },
    dialogsPage: {
         newMessageText: 'yo!',
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
}


export const addMessage = (messageMessage) => {
    let newMessage = {
        id: 7,
        message: state.dialogsPage.newMessageText,
    };

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';

    renderEntireTree(state);
}

export const updateNewMessageText = (newMessage) => {
        state.dialogsPage.newMessageText = newMessage;
        renderEntireTree(state) ;
    }




export const addPost = (postMessage) => {
    let newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';

    renderEntireTree(state) ;
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state) ;
}

export const subscraibe = (observer) => {
    renderEntireTree = observer; //паттерн наблюдатель .addEventListener
}

export default state;
