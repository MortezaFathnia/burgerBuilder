import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import withRouter from '../../hoc/WithRouter/WithRouter'
import ContactData from './ContactData/ContactData';

export class Checkout extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    price: 0
  }

  componentDidMount() {
    const propsList = this.props.searchParams.toString().split('&');
    let price = 0;
    let ingredients = {};
    const newState = propsList.reduce((acc, cur) => {
      let test={}
      if (cur.split('=')[0] === 'price') {
        price = cur.split('=')[1]
      }
      else{
        ingredients={...ingredients,[cur.split('=')[0]]: +cur.split('=')[1]}
      }
      return {ingredients:ingredients , price: price }
    }, {})
    this.setState(newState)
  }

  checkoutCanceledHandler = () => {
    this.props.navigate(-1);
  }

  checkoutContinuedHandler = () => {
    this.props.navigate('/checkout/contact-data', { replace: true });
  }

  render() {
    return (
      <div>
        <CheckoutSummary
          checkoutCanceled={this.checkoutCanceledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
          ingredients={this.state.ingredients}
        />
        <Routes>
          <Route
            path="*"
            element={<ContactData ingredients={this.state.ingredients} price={this.state.price} />} />
        </Routes>
      </div>
    )
  }
}

export default withRouter(Checkout)