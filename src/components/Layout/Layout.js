import React from 'react';

import styles from './Layout.module.css';

const Layout = (props) => (
    <div>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={styles.content}>
            {props.children}
        </main>
    </div>
)
export default Layout