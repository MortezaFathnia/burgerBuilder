import React, { Component } from 'react'
import { connect } from 'react-redux'

import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Burger from '../../components/Burger/Burger'
import OrderSummery from '../../components/Burger/OrderSummery/OrderSummery'
import Modal from '../../components/UI/Modal/Modal'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'
import axios from '../../axios-orders';
import withRouter from '../../hoc/WithRouter/WithRouter';
import * as actionType from '../../store/action'


export class BurgerBuilder extends Component {
  state = {
    purchasing: false,
    loading: false,
    error: false
  }

  componentDidMount() {
    // axios.get('https://react-my-burger-dfa1c-default-rtdb.firebaseio.com/ingredients.json')
    //   .then(res => {
    //     this.setState({ ingredients: res.data })
    //   })
    //   .catch(error => { this.setState({ error: true }) })
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => { return (sum + el) }, 0)
    return sum > 0
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false })
  }

  purchaseContinueHandler = () => {
    this.props.navigate({ pathname: '/checkout' });
  }


  render() {
    const disableInfo = {
      ...this.props.ingredients
    }
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0
    }
    let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />
    let orderSummery = null;
    if (this.props.ingredients) {
      burger = (
        <>
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            purchasable={this.updatePurchaseState(this.props.ingredients)}
            price={this.props.price}
            ordered={this.purchaseHandler}
            disabled={disableInfo} />
        </>)
      orderSummery = <OrderSummery
        ingredients={this.props.ingredients}
        price={this.props.price}
        purchasedCanceled={this.purchaseCancelHandler}
        purchasedContinued={this.purchaseContinueHandler}
      />;
    }
    if (this.state.loading) {
      orderSummery = <Spinner />
    }
    return (
      <>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummery}
        </Modal>
        {burger}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    price: state.totalPrice
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (igName) => dispatch({ type: actionType.ADD_INGREDIENT, ingredientName: igName }),
    onIngredientRemoved: (igName) => dispatch({ type: actionType.REMOVE_INGREDIENT, ingredientName: igName })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(withRouter(BurgerBuilder), axios))