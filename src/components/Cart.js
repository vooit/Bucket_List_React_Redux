/**
 * Created by Wojtek on 2018-03-24.
 */
import React from 'react';
import PropTypes from 'prop-types';
import cart from '../assets/media/cart.png'
const Cart = (props) => {

    return (
        <div className="cart">
            <div className="cart__wrapper">
                <div>
                    <img src={cart}/>
                    <span className="header__cart--counter">{props.elementNumber}</span>

                </div>
            </div>
            <div>
                <p>{props.total}</p>
                <button onClick={props.onClearClick}>Clear</button>
                <ul className="cart__list">
                    {props.cartEl.map((el, index) => {
                        return (

                            <li key={index}>
                                <img src={el.img}/>
                                <span>{el.name}</span>
                                <span>
                            {el.price}
                        </span>

                                <button onClick={props.onRemoveClick}>remove</button>
                            </li>)
                    })}
                </ul>
            </div>

        </div>
    )
};

Cart.propTypes = {
    cartEl: PropTypes.array.isRequired,
    onClearClick: PropTypes.func.isRequired,
    onRemoveClick: PropTypes.func.isRequired
}

export default Cart;