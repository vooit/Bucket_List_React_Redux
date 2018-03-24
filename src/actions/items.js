/**
 * Created by Wojtek on 2018-03-22.
 */
// import * as constants from '../constants';
// import axios from 'axios';
// import 'whatwg-fetch'


// export function fetchProducts() {
//     return dispatch => {
//         dispatch(fetchProductsBegin());
//         return fetch("/data/items")
//             .then(handleErrors)
//             .then(res => res.json())
//             .then(json => {
//                 dispatch(fetchProductsSuccess(json.items));
//                 return json.items;
//             })
//             .catch(error => dispatch(fetchProductsFailure(error)));
//     };
// }
//
// // Handle HTTP errors since fetch won't.
// function handleErrors(response) {
//     if (!response.ok) {
//         throw Error(response.statusText);
//     }
//     return response;
// }


//
// export function getItems() {
//     return (dispatch) => {
//         dispatch(getItemsStart());
//         axios('../data/events.json')
//             .then(data => dispatch(getEventsSuccess(data)))
//             .catch(error => dispatch(getEventsError(error)));
//     };
// }
//
// export function getEventsSuccess(data) {
//     return {
//         type: constants.ITEMS_GET_SUCCESS,
//         payload: {
//             data
//         }
//     }
// }
//
// export function getEventsError(error) {
//     return {
//         type: constants.ITEMS_GET_ERROR,
//         payload: {
//             error
//         }
//     }
// }
