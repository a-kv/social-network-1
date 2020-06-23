import React from 'react';
import classes from './Dialogs.module.css';
import {Field, Form, reduxForm} from "redux-form";
import {MaxLengthCreator, required} from "../../utils/validator/validators";
import {Textarea} from "../common/forms-controls/FormsControl";

const maxLength100 = MaxLengthCreator(100);

const AddMessageForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <div className={classes.sendMessage}>
                <Field placeholder='Enter your massage...'
                       component={Textarea}
                       validate={[required, maxLength100 ]}
                       name='newPostText'/>
            </div>
            <div><button>Send</button></div>
        </Form>
    )
}

export const AddMessageReduxForm = reduxForm({
    form: 'dialog-add-message-form' //unigue title
})(AddMessageForm)




