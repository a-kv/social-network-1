import React from 'react';
import classes from "./Profile.module.css";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    updateComponent() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }
        this.props.getUserProfile(userId);

        this.props.getStatus(userId); //2
    }

    componentDidMount() {
        this.updateComponent();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId)
            this.updateComponent();
    }

    render() {
        if (this.props.isAuth === false) return <Redirect to="/login"/>;
        return (
            <div className={classes.content}>
                <Profile  {...this.props}
                          isOwner={!this.props.match.params.userId}
                          profile={this.props.profile}
                          status={this.props.status}
                          updateStatus={this.props.updateStatus}
                          savePhoto={this.props.savePhoto}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status, //3 достаем юзерв из стейта
    authorizedUserId: state.auth.userId,

});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,

)(ProfileContainer);

