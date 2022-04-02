import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom';
import {connect} from 'react-redux'

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import withRouter from '../../hoc/WithRouter/WithRouter'
import ContactData from './ContactData/ContactData';

export class Checkout extends Component {


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
          ingredients={this.props.ingredients}
        />
        <Routes>
          <Route
            path="*"
            element={<ContactData/>} />
        </Routes>
      </div>
    )
  }
}

const mapStateToProps=state=>{
  return{
    ingredients:state.ingredients,
    price:state.totalPrice
  }
}


export default connect(mapStateToProps)(withRouter(Checkout))