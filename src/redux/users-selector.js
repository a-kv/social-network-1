//selectors - a function that receives the state and returns the part of the state that we need. Intended for difficult operation

import {createSelector} from "reselect";
const getUsersSel = (state) => {
    return state.usersPage.users;
}
export const getUsers = createSelector(getUsersSel, (users) => {
    return users.filter(u => true);
}); // function return selector

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}
export const getFollowingInProgress= (state) => {
    return state.usersPage.followingInProgress;
}