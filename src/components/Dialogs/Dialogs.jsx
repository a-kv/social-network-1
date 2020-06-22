import React from 'react';
import classes from './Dialogs.module.css';
import Messages from "./Message/Messages";
import DialogItem from "./DialodItem/DialogItem"
import {Redirect} from "react-router-dom";
import  {AddMessageReduxForm} from "./AddMessageForm";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Messages message={m.message} key={m.id}/>);

    let addMessage = (values) => {
        props.sendMessage(values.newMessageBody)
        // props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>;

    return <div className={classes.container}>
        <div className={classes.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={classes.messages}>
            <div>{messagesElements}</div>
        </div>
        <AddMessageReduxForm onSubmit={addMessage}/>
    </div>
}

export default Dialogs;


