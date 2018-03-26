/**
 * Created by Wojtek on 2018-03-26.
 */
import items from '../data/items.json';

const initialState = {
    items: items,
    item: undefined,
    cart: [],
    inCart: 0,
    opened: false
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            let newState = Object.assign({}, state);
            newState.cart = [...state.cart, action.item];
            newState.inCart = newState.cart.length;
            newState.opened = true;
            return newState
        case 'REMOVE_FROM_CART':
            let newCart = [...state.cart];
            let updatedCart = newCart.filter(item => item.id !== action.id);
            return Object.assign({}, state, {cart: updatedCart})

        case 'TOGGLE_CART':
            return Object.assign({}, state, {opened: !state.opened})
        case 'CLEAR_CART':
            console.log('clear')
            // let clearedCart = []
            return Object.assign({}, state, {cart: []})

        default:
            return state
    }
}