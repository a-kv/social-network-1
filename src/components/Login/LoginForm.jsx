import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/forms-controls/FormsControl";
import {required} from "../../utils/validator/validators";
import classes from '../common/forms-controls/FormsControl.module.css';

export const LoginForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        {createField(' Email', 'email', [required], Input)}
        {createField(' Password', 'password', [required], Input, {type: "password"})}
        {createField(null, 'rememberMe', Input, {type: "checkbox"}, 'Remember me' )}

        {error && <div className={classes.formSummaryError}>{error}</div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

export const LoginReduxForm = reduxForm({
    form: 'login' //unigue title
})(LoginForm) // transfer the component around which need to create reduxForm

//api для логинизации,