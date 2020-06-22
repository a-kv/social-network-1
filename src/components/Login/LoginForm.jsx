import React from 'react';
import {Field, reduxForm} from "redux-form";

export const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field type="text" placeholder={' Login'} component={"input"} name={"login"}/></div>
        {/*component from redux-form*/}
        <div><Field type="password" placeholder={' Password'} component={"input"} name={"password"}/></div>
        <div>Remember me<Field type="checkbox" component={"input"} name={"rememberMe"}/></div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

export const LoginReduxForm = reduxForm({
    form: 'login' //unigue title
})(LoginForm) // transfer the component around which need to create reduxForm

//api для логинизации,