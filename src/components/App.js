/**
 * Created by Wojtek on 2018-03-22.
 */
import React from 'react';
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
            opened: false,
            status: 'add to cart'
        }
    }

    componentDidMount() {
        this.setState({
            items: items
        });
    }

    onCartClick() {
        this.setState(prevState => {
            return {
                opened: !prevState.opened
            }
        });
    }

    addToCart(item) {
        console.log(item);
        this.state.cart.push(item);
        let arrayCartCopy = this.state.cart;
        let updateInCart = arrayCartCopy.length;
        this.setState({
            status: 'added',
            inCart: updateInCart,
            cart: arrayCartCopy,
            opened: true
        });
    }

    removeFromCart(item) {
        console.log(item);
    }

    clearCart() {
        this.setState({
            cart: [],
            inCart: 0,
            total: 0
        })
    }

    render() {
        const {inCart, cart, status, total, opened} = this.state;
        if (!items.length) {
            return <Loader />
        }
        return (
            <div id="App">
                <header className="header">
                    <div className="container flex">
                        <div className="header__logo"><img src={logo}/></div>
                        <Cart
                            opened={opened}
                            toggleCart={this.onCartClick.bind(this)}
                            onClearClick={this.clearCart.bind(this, cart)}
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