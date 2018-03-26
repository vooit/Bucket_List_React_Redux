/**
 * Created by Wojtek on 2018-03-24.
 */
import React from 'react';
import cart from '../assets/media/cart.png';
import {connect} from 'react-redux';

const Cart = (props) => {
    const updateTotalAmount = () => {
        const prices = props.cartEl.map(el => {
            return (
                parseFloat(el.price)
            )
        })
        const sum = prices.reduce((prev, curr) => {
            return prev + curr
        }, 0)
        return (
            <div>{sum}</div>
        )
    }

    return (
        <div className="cart">
            <div className="cart__wrapper" onClick={props.toggleCart}>
                <img src={cart}/>
                <span className="header__cart--counter">{props.elementNumber}</span>
            </div>

            <div className={ props.opened ? "vissible" : "hidden" }>
                <ul className="cart__list">
                    <div className="cart__summary">
                        <div>{updateTotalAmount()}</div>
                        <button onClick={props.onClearClick} className="button">Clear Cart</button>
                    </div>
                    {props.cartEl.map((el, index) => {
                        return (
                            <li key={index} className="cartItem">
                                <div className="cartItem__img">
                                    <img src={el.img}/>
                                </div>
                                <div className="cartItem__copy">
                                    <span>{el.name}</span>
                                    <span>{el.price}</span>
                                </div>
                            </li>)
                    })}
                </ul>
            </div>

        </div>
    )
};
function mapStateToProps(state) {
    return {
        opened: state.opened
    };
}

export default connect(mapStateToProps)(Cart);