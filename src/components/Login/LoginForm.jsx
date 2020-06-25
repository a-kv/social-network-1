import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/forms-controls/FormsControl";
import {required} from "../../utils/validator/validators";

export const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field type="text" placeholder={' Email'} component={Input} name={"email"} validate={[required]}/></div>
        {/*component from redux-form*/}
        <div><Field type="password" placeholder={' Password'} component={Input} name={"password"} validate={[required]}/></div>
        <div>Remember me<Field type="checkbox" component={Input} name={"rememberMe"}/></div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

export const LoginReduxForm = reduxForm({
    form: 'login' //unigue title
})(LoginForm) // transfer the component around which need to create reduxForm

//api для логинизации,