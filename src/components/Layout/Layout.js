import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';

import styles from './Layout.module.css';

const Layout = (props) => (
    <div>
        <Toolbar/>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={styles.content}>
            {props.children}
        </main>
    </div>
)
export default Layout