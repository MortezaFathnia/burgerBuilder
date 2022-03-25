import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NaviagationItems/NavigationItems'

import classes from './Toolbar.module.css'

const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <div className={classes.Container}>
                <div>MENU</div>
                <div className={classes.LogoWrapper}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </header>
    )
}

export default Toolbar