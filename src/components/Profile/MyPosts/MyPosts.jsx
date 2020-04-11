import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElement =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost();
    }

    let onPostOnChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return <div className={classes.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div className={classes.addNewPost}>
                <textarea onChange={onPostOnChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div className={classes.buttonAddPost}>
                <button onClick={addPost}>Add post</button>
            </div>

        </div>
        <div className={classes.posts}>
            {postsElement}
        </div>
    </div>
}
export default MyPosts;
