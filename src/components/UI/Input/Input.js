import React from 'react'

import classes from './Input.module.css';

const Input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.inputElement];
    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(classes.invalid)
    }
    switch (props.elementType) {
        case ('input'):
            inputElement =
                <input
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    onChange={props.changed}
                    value={props.value}
                />;
            break;
        case ('textarea'):
            inputElement =
                <textarea
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />;
            break;
        case ('select'):
            inputElement =
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}
                >
                    {props.elementConfig.options.map(option =>
                    (
                        <option
                            value={option.value}
                        >
                            {option.displayValue}
                        </option>
                    )
                    )}

                </select>;
            break;
        default:
            inputElement =
                <input
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    onChange={props.changed}
                    value={props.value}
                />
    }
    return (
        <div className={classes.input}>
            <label className={classes.label}>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default Input