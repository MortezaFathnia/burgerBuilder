import React from 'react';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.module.css';

const Modal = (props) => {
  return (
    <>
      <Backdrop show={props.show} clicked={props.modalClosed}/>
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
}

export default Modal