import React from 'react';
import {connect} from "react-redux";


export const Login = (props) => {
    let loginRef = React.createRef();
    let passwordRef = React.createRef();
    let rememberMeRef = React.createRef();

    const login = () => {
        props.login && props.login(loginRef.current.value, passwordRef.current.value, rememberMeRef.current.checked);
    }
    return <div>
        <div><input type="text" placeholder={'login'}/></div>
        <div><input type="password" placeholder={'password'}/></div>
        <div>Remember me<input type="checkbox"/></div>
        <div>
            <button onClick={login}>Login</button>
        </div>
    </div>
}


let mapStateToProps = (state) => ({
    isAuth :state.auth.isAuth,
    status: state.auth.status,
    message: state.auth.message,
    captchaUrl: state.auth.captchaUrl, // проверка на робота

});
let mapDispatchToProps = (dispatch) => ({
    login: (login, password, rememberMe) => {
        dispatch(login(login, password, rememberMe))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);