import React from 'react';
import classes from './Dialogs.module.css';
import {Field, Form, reduxForm} from "redux-form";

const AddMessageForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <div className={classes.sendMessage}>
                <Field placeholder='Enter your massage...'
                       component='textarea'
                       name='newPostText'/>
            </div>
            <div><button>Send</button></div>
        </Form>
    )
}

export const AddMessageReduxForm = reduxForm({
    form: 'dialog-add-message-form' //unigue title
})(AddMessageForm)




