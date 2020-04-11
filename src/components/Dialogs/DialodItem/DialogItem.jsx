import React from 'react';
import classes from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={classes.dialog + ' ' + classes.active}>
        {/*<div className={classes.ava}>*/}
            <img className={classes.ava} src= "https://image.flaticon.com/icons/svg/194/194938.svg"/>
        {/*</div>*/}
        <NavLink to={path}>{props.name}</NavLink>
    </div>

}

export default DialogItem;
