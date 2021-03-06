import React, { Component } from 'react'
import { connect } from 'react-redux'

import axios from '../../axios-orders'
import Order from '../../components/Order/Order'
import Spinner from '../../components/UI/Spinner/Spinner'
import * as actions from '../../store/actions'
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'

export class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders();
  }

  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      orders = (this.props.orders.map(order => {
        return <Order
          key={order.id}
          ingredients={order.ingredients}
          price={order.price}
        />
      }))
    }
    return (
      <div>
        {orders}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios))