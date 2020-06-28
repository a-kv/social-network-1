import React from 'react';
import userPhoto from "../../assets/ava.gif";
import classes from "./Users.module.css";
import {NavLink} from "react-router-dom";


let UsersC = (props) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div className={classes.container}>
        <div className={classes.pages}>
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
                    ? <button disabled={props.followingInProgress
                        .some(id => id === u.id)}
                              onClick={() => {
                                  props.unfollow(u.id)
                              }}>Unfollow</button>
                    : <button disabled={props.followingInProgress
                        .some(id => id === u.id)} onClick={() => {
                        props.follow(u.id)
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