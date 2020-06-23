import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, Form, reduxForm} from "redux-form";
import {MaxLengthCreator, required} from "../../../utils/validator/validators";
import {Textarea} from "../../common/forms-controls/FormsControl";

const maxLength10 = MaxLengthCreator(10);
const AddNewPostForm = (props) => {

    return <div className={classes.postsBlock}>
        <Form onSubmit={props.handleSubmit} >
            <div className={classes.addNewPost}>
                <Field validate={[required, maxLength10 ]} component={Textarea} name='newPostText'/>
            </div>
            <div className={classes.buttonAddPost}>
                <button>Add post</button>
            </div>

        </Form>
    </div>
}
export const AddNewPostReduxForm = reduxForm({form: 'profile-add-post-form\''})(AddNewPostForm);
