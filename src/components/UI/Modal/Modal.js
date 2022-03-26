import React from 'react';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.module.css';

const Modal = React.memo((props) => {
  
  return (
    <>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}
        className={classes.Modal}>
        {props.children}
      </div>
    </>
  )
}, (prevProps, nextProps) => {
  return prevProps.show === nextProps.show
})

export default Modal