import React from 'react';
import classes from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
import PropTypes, {string} from 'prop-types';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={classes.dialog + ' ' + classes.active}>
        <div className={classes.dialogItem}>
            <img className={classes.ava} src="https://image.flaticon.com/icons/svg/194/194938.svg"/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    </div>

}

export default DialogItem;
DialogItem.propTypes = {
    name: PropTypes.string
};