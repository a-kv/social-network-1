import React from 'react';
import classes from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {

    return <div className={classes.container}>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} pageSize={pageSize} totalUsersCount={totalUsersCount}/>
        <div>
            {users.map(u => <User
                    user={u}
                    key={u.id}
                    followingInProgress={props.followingInProgress}
                    follow={props.follow}
                    unfollow={props.unfollow}
                />
            )}
        </div>
    </div>
}


export default Users;