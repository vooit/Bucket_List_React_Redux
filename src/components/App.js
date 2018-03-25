/**
 * Created by Wojtek on 2018-03-22.
 */

import React from 'react';
// import Header from './Header';
import logo from '../assets/media/logo.png'
import banner from '../assets/media/main_baner.jpg'

import Cart from './Cart';

import items from '../data/items.json';
import Item from './Item';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            item: undefined,
            cart: [],
            inCart: 0,
            total: 10,
            found: false,
            status: 'add to cart'
        }
    }

    componentDidMount() {
        this.setState({
            items: items
        });
    }


    updateTotal(item) {
        console.log(item.price);
        this.setState({total})
    }

    addToCart(item) {
        // console.log(item.id);
        console.log(item)
        this.state.cart.push(item);
        let arrayCartCopy = this.state.cart;
        let updateInCart = arrayCartCopy.length;

        this.setState({
            status: 'added',
            inCart: updateInCart,
            cart: arrayCartCopy
        });
        // console.log(this.state.cart);
    }

    isInCart(item) {
        return this.state.cart.items.indexOf(item.id) !== -1;
    }


    removeFromCart(elem) {
        console.log('poopopo');
        console.log(elem);
    }

    clearCart() {
        this.setState({
            cart: [],
            inCart: 0,
            total: 0
        })
    }


    render() {
        const {inCart, cart, status, total} = this.state;
        if (!items.length) {
            return <Loader />
        }
        return (
            <div id="App">
                <header className="header">
                    <div className="container flex">
                        <div className="header__logo"><img src={logo}/></div>
                        <Cart
                            onClearClick={this.clearCart.bind(this)}
                            onRemoveClick={this.removeFromCart.bind(this)}
                            total={total}
                            elementNumber={inCart}
                            cartEl={cart}
                        />
                    </div>
                </header>
                <main className="container main">
                    <h2 className="main__title">Game of the week:</h2>
                    <div className="main__banner">
                        <img src={banner}/></div>
                    <ul className="items-group">
                        {this.state.items.map(item => {
                            return (<Item
                                {...item}
                                status={status}
                                key={item.id}
                                onItemClick={this.addToCart.bind(this, item)}/>);
                        })}
                    </ul>
                </main>
            </div>
        )
    }
}