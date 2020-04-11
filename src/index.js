import * as serviceWorker from './serviceWorker';
import state, {subscraibe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText, updateNewMessageText, addMessage} from "./redux/state";
// import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";

let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage}
                 updateNewMessageText={updateNewMessageText}/>
        </BrowserRouter>, document.getElementById('root'));
}
renderEntireTree (state);

subscraibe(renderEntireTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
