import React from 'react';
import classes from "./ProfileInfo.module.css";
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../common/forms-controls/FormsControl";


const ProfileDataForm = ({handleSubmit, profile, error}) => {

    return <form className={classes.profileDescription}
                 onSubmit={handleSubmit}>
        <div>
            <button>Save</button>
        </div>
        {error && <div className={classes.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <span>Fullname: </span>{createField('Full name', "fullName", [], Input)}
        </div>
        {/*<div><span>userId: </span>{props.profile.userId}</div>*/}
        <div>
            <span>Looking for a job: </span>{profile.lookingForAJob ? 'yes' : 'no'}{createField('', "lookingForAJob", [], Input, {type: 'checkbox'})}
        </div>
        <div>
            <span>My professional skills: </span>{profile.lookingForAJobDescription}{createField('My professional skills...', "lookingForAJobDescription", [], Textarea)}
        </div>
        <div>
            <b>About me</b>:
            {createField("About me", "aboutMe", [], Textarea)}
        </div>
        <div>
            <span>Contacts: </span>{Object.keys(profile.contacts).map(key => {
            return <div>{key}: {createField(key, "contacts." + key, [], Input)}</div>
        })}
        </div>
    </form>
}

const ProfileDataFormRedux = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormRedux;