import React from 'react'

import classes from './Logo.module.css'
import burgerLogo from '../../assets/Images/burger-logo.png';

const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="logo" />
        </div>
    )
}

export default Logo