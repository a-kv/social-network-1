import React from 'react';
import classes from "./Post.module.css";

const Post = (props) => {
    return  <div className={classes.item}>
            <img src= "https://image.flaticon.com/icons/svg/194/194938.svg"/>
        {props.message}
        <div>
        <span>like </span> {props.likesCount}
        </div>
        </div>

}
export default Post;

