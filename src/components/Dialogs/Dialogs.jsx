import React from 'react';
import classes from './Dialogs.module.css';
import Messages from "./Message/Messages";
import DialogItem from "./DialodItem/DialogItem"
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import PropTypes from 'prop-types';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Messages message={m.message}/>);
    let newMessageBody = state.newMessageBody;


    // let newMessage = React.createRef();
    // let newMessageElement = React.createRef();

    let addMessage = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={classes.messages}>
            <div>{messagesElements}</div>
            <div>
                <div className={classes.sendMessage}>
                    <textarea placeholder='Enter your massage...'
                              onChange={onNewMessageChange}
                              value={newMessageBody}> </textarea>
                </div>
                <div>
                    <button
                        onClick={addMessage}
                        className={classes.sendMessage}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    </div>
}
export default Dialogs;
