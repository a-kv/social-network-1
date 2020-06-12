import React from 'react';
import classes from "./Profile.module.css";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 14;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        if (this.props.isAuth === false) return <Redirect to="/login"/>;
        return (
            <div className={classes.content}>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth

});

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);


// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
//let WithUrlDataContainerComponent = withRouter(withAuthRedirect(ProfileContainer));
//

// export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);







// (props) => {
// if (!this.props.isAuth) return <Redirect to='/login'/>
// return <ProfileContainer {...props}/>
// let mapStateToPropsForRedirect = (state) => ({
//     isAuth: state.auth.isAuth
// });


// compose(
//     connect(mapDispatchToProps, {getUserProfile}),
//     withRouter,
//     withAuthRedirect
// )(ProfileContainer)


// let AuthRedirect = withAuthRedirect(ProfileContainer)

// export default connect(mapDispatchToProps, {getUserProfile})(ProfileContainer);