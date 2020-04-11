import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Messages from "./Message/Messages";
import DialogItem from "./DialodItem/DialogItem"

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Messages message={m.message}/>);

    let newMessage = React.createRef();
    let newMessageElement = React.createRef();

    let addMessage = () => {
        let mess = newMessageElement.current.value;
        props.addMessage();
    }

    let onMessageOnChange = () => {
        let mess = newMessageElement.current.value;
        props.updateNewMessageText(mess);
    };

    return <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>

            {dialogsElements}

        </div>
        <div className={classes.messages}>
            {messagesElements}
            <div className={classes.sendMessage}>
                <textarea onChange={onMessageOnChange} ref={newMessageElement} value={props.newMessageText}> </textarea>
            </div>
            <button onClick={addMessage} className={classes.sendMessage}>Send</button>
        </div>

    </div>
}
export default Dialogs;
