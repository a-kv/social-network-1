import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



let mapStateProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
 let mapDispatchProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
           dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());

        }
    }
}

const MyPostsContainer = connect(mapStateProps, mapDispatchProps)(MyPosts);

export default MyPostsContainer;


// const MyPostsContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>{
//
//             (store) => {
//                 let state = props.store.getState();
//
//                 let addPost = () => {
//                     props.store.dispatch(addPostActionCreator());
//                 }
//
//                 let onPostOnChange = (text) => {
//                     let action = updateNewPostTextActionCreator(text);
//                     props.store.dispatch(action);
//
//                 }
//
//
//                 return <MyPosts updateNewPropsText={onPostOnChange}
//                                 addPost={addPost}
//                                 posts={state.profilePage.posts}
//                                 newPostText={state.profilePage.newPostText}/>
//
//         }
//         }
//         </StoreContext.Consumer>
//     )