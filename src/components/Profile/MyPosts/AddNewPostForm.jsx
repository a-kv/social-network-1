import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, Form, reduxForm} from "redux-form";


const AddNewPostForm = (props) => {

    return <div className={classes.postsBlock}>
        <Form onSubmit={props.handleSubmit} >
            <div className={classes.addNewPost}>
                <Field component={'textarea'} name={'newPostElement'} value={props.newPostText}/>
            </div>
            <div className={classes.buttonAddPost}>
                <button>Add post</button>
            </div>

        </Form>
    </div>
}
export const AddNewPostReduxForm = reduxForm({form: 'profile-add-post-form\''})(AddNewPostForm);
