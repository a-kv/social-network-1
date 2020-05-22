import React from 'react';
import loading from '../../../assets/loading.gif';


let Preloader = () => {
    return <div style={{backgroundColor: 'white'}}>
        <img src={loading} alt="loading"/>
    </div>
}

export default Preloader;