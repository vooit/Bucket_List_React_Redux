/**
 * Created by Wojtek on 2018-03-22.
 */
import React from 'react';
import {connect} from 'react-redux';
import logo from '../assets/media/logo.png'
import banner from '../assets/media/main_baner.jpg'
import Cart from './Cart';
import Item from './Item';
import {addToCart, removeFromCart, toggleCart, clearCart} from '../actions/index'
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // items: [],
            // item: undefined,
            // cart: [],
            // inCart: 0,
            // opened: false
            // status: 'add to cart'
        }
    }

    onCartClick() {
        /*
        this.setState(prevState => {
            return {
                opened: !prevState.opened
            }
        });
        */
        this.props.dispatch(onCartClick())
    }

    addToCart(item) {
        this.props.dispatch(addToCart(item))
    }

    removeFromCart(item) {
        this.props.dispatch(removeFromCart(item))
    }

    clearCart(cart) {
        /*
        this.setState({
            cart: [],
            inCart: 0,
            total: 0
        })
        */
        this.props.dispatch(clearCart(cart))
    }

    render() {
        const {inCart, cart, status, opened} = this.props;
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
                            elementNumber={inCart}
                            cartEl={cart}/>
                    </div>

                </header>
                <main className="container main">
                    <h2 className="main__title">Game of the week:</h2>
                    <div className="main__banner">
                        <img src={banner}/></div>
                    <ul className="items-group">
                        {this.props.items.map(item => {
                            return (<Item
                                {...item}
                                status={status}
                                id={item.id}
                                key={item.id}
                                onRemoveClick={(item) => this.removeFromCart(item)}
                                onItemClick={this.addToCart.bind(this, item)}/>);
                        })}
                    </ul>
                </main>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        cart: state.cart,
        item: state.item,
        inCart: state.inCart,
        opened: state.opened,
        status: state.status,
        items: state.items
    }
}
export default connect(mapStateToProps)(App)