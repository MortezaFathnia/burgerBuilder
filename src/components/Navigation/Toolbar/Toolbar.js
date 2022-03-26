import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

import classes from './Toolbar.module.css'

const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <div className={classes.Container}>
                <DrawerToggle clicked={props.drawerToggleClicked}/>
                <div className={classes.LogoWrapper}>
                    <Logo />
                </div>
                <nav className='desktopOnly'>
                    <NavigationItems />
                </nav>
            </div>
        </header>
    )
}

export default Toolbar