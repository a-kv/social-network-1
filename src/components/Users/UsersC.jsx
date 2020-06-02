import React from 'react';
import userPhoto from "../../assets/ava.gif";
import classes from "./Users.module.css";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


let UsersC = (props) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div className={classes.container}>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && classes.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}> {p} </span>
            })}
        </div>
        {props.users.map(u => <div key={u.id}>
        <span className={classes.users}>
            <div className={classes.usersAvatar}>
                <NavLink to={`/profile/${u.id}`}>
                <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={classes.userPhoto}/>
                </NavLink>
            </div>
            <div>
                {u.followed
                    ? <button disabled={props.followingInProgress} onClick={() => {
                        props.toggleFollowingInProgress(true, u.id)
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                            withCredentials: true,

                        })
                            .then(response => {
                                if (response.data.resultCode === 0) {
                                    props.unfollow(u.id)
                                }
                                props.toggleFollowingInProgress(false, u.id)
                            });
                    }}>Unfollow</button>
                    : <button disabled={props.followingInProgress} onClick={() => {
                        props.toggleFollowingInProgress(true, u.id);
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "d13010db-d825-4b89-b5a1-3acdd313b6bb"
                            }
                        })
                            .then(response => {
                                if (response.data.resultCode === 0) {
                                    props.follow(u.id)
                                }
                                props.toggleFollowingInProgress(false, u.id)
                            });
                    }}>Follow</button>}
            </div>
        </span>
            <span>
               <span>
                   <div>{u.name}</div>
                   <div>{u.status}</div>
                </span>
                {/*<span>*/}
                {/*  <div>{u.location.country}</div>*/}
                {/*  <div>{u.location.city}</div>*/}
                {/*</span>*/}
              </span>
        </div>)}
    </div>

}


export default UsersC;