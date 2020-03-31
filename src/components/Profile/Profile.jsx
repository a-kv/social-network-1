import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from "../MyPosts/MyPosts";

const Profile = () => {
    return <div className={classes.content}>
        <div>
            <img src= 'https://avatars.mds.yandex.net/get-zen_doc/1350031/pub_5d079f7d20f7430dda23bb18_5d07a00094ca190e9650499e/scale_1200'/>
        </div>
        <div className={classes.ava}>
            ava + description
            {/*<img src='https://pm1.narvii.com/6582/564e9c90145c74898f872c6411709af837f4f0dc_hq.jpg'/>*/}
        </div>
        <MyPosts/>
    </div>
}
export default Profile;