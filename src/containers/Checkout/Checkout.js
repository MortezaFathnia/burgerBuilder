import React, { Component } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { connect } from 'react-redux'

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import withRouter from '../../hoc/WithRouter/WithRouter'
import * as actions from '../../store/actions'

export class Checkout extends Component {

  checkoutCanceledHandler = () => {
    this.props.navigate(-1);
  }

  checkoutContinuedHandler = () => {
    this.props.navigate('contact-data', { replace: true });
  }

  render() {
    let summary = <Navigate to="/" replace />;
    if (this.props.ingredients) {
      const purchasedRedirect = this.props.purchased ? <Navigate to="/" replace /> : null;
      summary = (
        <div>
          {purchasedRedirect}
          <CheckoutSummary
            checkoutCanceled={this.checkoutCanceledHandler}
            checkoutContinued={this.checkoutContinuedHandler}
            ingredients={this.props.ingredients}
          />
          <Outlet />
        </div>
      )
    }
    return summary;
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    purchased: state.order.purchased
  }
}

export default connect(mapStateToProps)(withRouter(Checkout))