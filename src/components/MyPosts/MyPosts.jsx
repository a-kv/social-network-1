import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return <div className={classes.content}>
        My posts
        <div>
           <textarea></textarea>
           <button>Add post</button>
           <button>Remuve</button>
        </div>
        <div className={classes.posts}>
        <Post message = "Hey, how are you?" likesCount = "0"/>
        <Post message = "It's my first post." likesCount = "2" />
    </div>
    </div>
}
export default MyPosts;
