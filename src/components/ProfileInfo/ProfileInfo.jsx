import React from 'react';
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return <div>
        <div>
            <img
                src='https://avatars.mds.yandex.net/get-zen_doc/1350031/pub_5d079f7d20f7430dda23bb18_5d07a00094ca190e9650499e/scale_1200'/>
        </div>
        <div className={classes.descriptonBlock}>
            ava + description
                  </div>
    </div>

}
export default ProfileInfo;