import React from 'react';
import './App.css';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Login from "./components/Login/Login";
import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initialazeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {    //refactor to class component ctrl+alt+shift+t

    componentDidMount() {
        this.props.initialazeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?'
                           render={withSuspense(ProfileContainer)}/>
                    <Route path='/dialogs'
                           render={withSuspense(DialogsContainer)}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initialazeApp}))
(App);


const MainApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default MainApp;