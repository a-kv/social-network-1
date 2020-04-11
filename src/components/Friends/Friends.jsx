import React from 'react';
import classes from './Friends.module.css';
import {NavLink} from "react-router-dom";

const Friends = () => {
    return (
        <div className={classes.friends}>
             <NavLink to={path}>{props.name}</NavLink>
        </div>
      );
}
export default Friends;