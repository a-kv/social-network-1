import React from 'react';
import {connect} from 'react-redux';
import {
    followAC,
    setUsersAC,
    unfollowAC,
    setCurrentPageAC,
    setUsersTotalCountAC,
} from "../../redux/users-reducer";
import UsersC from "./UsersC";

let mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let MapDispatchToProps = (dispatch) =>{
    return{
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) =>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) =>{
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}
export default connect (mapStateToProps, MapDispatchToProps)(UsersC);