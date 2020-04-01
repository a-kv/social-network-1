import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={classes.dialog + ' ' + classes.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>

}
const Message = (props) => {
    return <div className={classes.message}>{props.message}</div>
}

const Dialogs = (props) => {
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


    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>);

    return <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            { dialogsElements }

        </div>
        <div className={classes.messages}>
            { messagesElements }
       </div>

    </div>
}
export default Dialogs;
