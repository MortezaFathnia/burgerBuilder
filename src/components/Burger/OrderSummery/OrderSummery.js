import React, { Component } from 'react'
import Button from '../../UI/Button/Button'

class OrderSummery extends Component {
    componentDidUpdate(){
        console.log('[orderSummery] ')
    }
    render() {
        const ingredientsSummery = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{this.props.ingredients[igKey]}
                    </li>)
            })
        return (
            <>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientsSummery}
                </ul>
                <p><strong>Total Price: {this.props.price}$</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType='Danger' clicked={this.props.purchasedCanceled}>CANCEL</Button>
                <Button btnType='Success' clicked={this.props.purchasedContinued}>CONTINUE</Button>
            </>
        )
    }

}

export default OrderSummery