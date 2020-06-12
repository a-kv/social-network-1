import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    getUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleFollowingInProgress,
    unfollow,
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {Redirect} from "react-router-dom";
import UsersC from "./UsersC";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber);
    }

    render() {
        if (!this.props.isAuth) return <Redirect to="/login"/>
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <UsersC
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                currentPage={this.props.currentPage}
                followingInProgress={this.props.followingInProgress}
            />}

        </>
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}


// let AuthRedirect = withAuthRedirect(UsersContainer);

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        setUsersTotalCount,
        toggleFollowingInProgress,
        getUsers
    }),
    withAuthRedirect,

)(UsersContainer);

// export default connect(mapStateToProps, (mapStateToProps, {follow, unfollow, setCurrentPage, setUsersTotalCount,toggleFollowingInProgress,getUsers}))(UsersContainer);


// export default connect(mapStateToProps, {
//     follow,
//     unfollow,
//     setCurrentPage,
//     setUsersTotalCount,
//     toggleFollowingInProgress,
//     getUsers
// })(UsersContainer);

// export default compose(
//     withAuthRedirect,
//     connect(mapStateToProps, {follow, unfollow, setCurrentPage, setUsersTotalCount,toggleFollowingInProgress,getUsers})
// )(UsersContainer);

//
// let MapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }
//































