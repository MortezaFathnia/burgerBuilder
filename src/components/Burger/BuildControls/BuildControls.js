import React from 'react'
import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.module.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const BuildControls = (props) => {
    return (
        <div className={classes.buildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong>$</p>
            {controls.map(ctrl => {
                return (<BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]} />)
            })}
            <button
             className={classes.OrderButton}
             disabled={!props.purchasable}
             onClick={props.ordered}
             >ORDER NOW</button>
        </div>
    )
}

export default BuildControls