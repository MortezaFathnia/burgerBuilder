import axios from '../../../axios-orders';
import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'
import Spinner from '../../../components/UI/Spinner/Spinner';
import withRouter from '../../../hoc/WithRouter/WithRouter';

export class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault()
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            costumer: {
                name: 'Morteza Fathnia',
                address: {
                    street: 'TestStreet 1',
                    zipCode: '41235',
                    country: 'Germany'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false })
                this.props.navigate('/');
            })
            .catch(error => {
                this.setState({ loading: false })
            })
    }

    render() {
        let form = (
            <form>
                <input className={classes.input} type='text' name="name" placeholder='name' />
                <input className={classes.input} type='email' name="email" placeholder='Your Email' />
                <input className={classes.input} type='text' name="street" placeholder='name' />
                <input className={classes.input} type='text' name="postal" placeholder='Postal' />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.contactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default withRouter(ContactData)