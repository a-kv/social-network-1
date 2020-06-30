import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {AddNewPostReduxForm} from "./AddNewPostForm";


const MyPosts = React.memo(props => {

    let postsElement =
        [...props.posts] // не можем изменять объект на прямую, делаем копию
            .reverse()
            .map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>);

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
});

export default MyPosts;
