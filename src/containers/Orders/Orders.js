import React, { Component } from 'react'

import axios from '../../axios-orders'
import Order from '../../components/Order/Order'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'

export class Orders extends Component {
  state = {
    orders: [],
    loading: true
  }
  componentDidMount() {
    axios.get('orders.json')
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          })
        }
        this.setState({ loading: false, orders: fetchedOrders })
      })
      .catch(err => {
        this.setState({ loading: false })
      })
  }
  render() {
    let orders = null;
    if (this.state.loading) {
      orders = <Spinner />
    }
    orders = (this.state.orders.map(order => {
      return <Order
        key={order.id}
        ingredients={order.ingredients}
        price={order.price}
      />
    }))
    return (
      <div>
        {orders}
      </div>
    )
  }
}

export default withErrorHandler(Orders, axios)