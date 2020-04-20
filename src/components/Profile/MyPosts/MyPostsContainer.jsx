import React from 'react';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let postsElement =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
// debugger;
    let newPostElement = React.createRef();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostOnChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);

    }

    return (<MyPosts updateNewPropsText={onPostOnChange}
                     addPost={addPost}
                     posts={props.profilePage.posts}
                     newPostText={state.profilePage.newPostText}   />)


}
export default MyPostsContainer;
