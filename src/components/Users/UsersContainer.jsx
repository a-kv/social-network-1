import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    requestUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleFollowingInProgress,
    unfollow,
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import Users from "./Users";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selector";


class UsersContainer extends React.Component {

    componentDidMount() {
        let {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        let {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize);
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

//use selectors
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        setUsersTotalCount,
        toggleFollowingInProgress,
        getUsers: requestUsers
    }),
    // withAuthRedirect,
)(UsersContainer);
















