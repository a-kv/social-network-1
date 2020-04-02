import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
let posts = [
    {id: 1, message: 'Hey, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post.', likesCount: 3},
    {id: 3, message: 'Puzan!', likesCount: 1345}
]
let dialogs = [
    {id: 1, name: 'Poli'},
    {id: 2, name: 'Mom'},
    {id: 3, name: 'Andrew'},
    {id: 4, name: 'Elvira'},
    {id: 5, name: 'Anastasiya'},
    {id: 6, name: 'Igor'}]

let messages = [
    {id: 1, message: 'Hey'},
    {id: 2, message: 'Yo'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'Yo'}]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,

  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
