/**
 * Created by Wojtek on 2018-03-26.
 */
const REMOVE_FROM_CART ='REMOVE_FROM_CART';
const ADD_TO_CART = 'ADD_TO_CART';

export function addToCart (item) {
    return {
        type: ADD_TO_CART,
        item
    }
}

export function removeFromCart (id) {
    return {
        type:REMOVE_FROM_CART,
        id:id
    }
}


