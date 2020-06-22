import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {AddNewPostReduxForm} from "./AddNewPostForm";


const MyPosts = (props) => {

    let postsElement =
        props.posts.map(p => <Post message={p.message}  key={p.id} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return <div className={classes.postsBlock}>
        <h3>My posts</h3>
        <AddNewPostReduxForm onSubmit={onAddPost}/>
        <div className={classes.posts}>
            {postsElement}
        </div>
    </div>
}
export default MyPosts;
