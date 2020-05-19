import React from 'react';
import {connect} from 'react-redux';
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import UsersC from "./UsersC";

let mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users
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
        }
    }
}
export default connect (mapStateToProps, MapDispatchToProps)(UsersC);