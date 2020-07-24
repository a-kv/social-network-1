import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/forms-controls/FormsControl";
import {required} from "../../utils/validator/validators";
import classes from '../common/forms-controls/FormsControl.module.css';

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return <form onSubmit={handleSubmit}>
        {createField(' Email', 'email', [required], Input)}
        {createField(' Password', 'password', [required], Input, {type: "password"})}
        {createField(null, 'rememberMe', [], Input, {type: "checkbox"}, 'Remember me' )}
        {captchaUrl && <img src={captchaUrl}/>}
        {captchaUrl && createField(' Symbols from image', 'captcha', [required], Input, {})}
        {error && <div className={classes.formSummaryError}>{error}</div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

export const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm) // transfer the component around which need to create reduxForm
