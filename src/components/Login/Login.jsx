import React from 'react';
import {LoginReduxForm} from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

export const Login = (props) => {


    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }// из пропсов вызываем логин и вызываем по этим же именем приходит колбек, который внутри себя диспатчит вызов санк криейтора, колл бэк принимает эти параметры и передает их в санк криейтор

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <div>to start using the application in test mode, enter
            Email: free@samuraijs.com
            Password: free
        </div>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login); // здесть логин как санк криэйтор
