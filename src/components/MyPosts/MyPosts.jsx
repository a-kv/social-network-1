import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {id: 1, message: 'Hey, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post.', likesCount: 3},
        {id: 3, message: 'Puzan!', likesCount: 1345}
    ]
    let postsElement =
        posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    return <div className={classes.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>

        </div>
        <div className={classes.posts}>
            {postsElement}
        </div>
    </div>
}
export default MyPosts;
