import React from 'react';
import loading from '../../../assets/Spinner-1s-200px (3).gif';
import classes from './Preloader.module.css';

let Preloader = () => {
    return <div className={classes.preloader}>
        <img src={loading} alt="loading"/>
    </div>
}

export default Preloader;