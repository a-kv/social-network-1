import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {Route} from "react-router-dom";

const Profile = (props) => {

    return <div className={classes.content}>
        <ProfileInfo/>
        <MyPosts posts={props.profilePage.posts}
                 newPostText={props.profilePage.newPostText}
                 updateNewPostText={props.updateNewPostText}
                 addPost={props.addPost}/>
    </div>
}
export default Profile;