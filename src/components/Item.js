/**
 * Created by Wojtek on 2018-03-24.
 */
import React from 'react';
import {connect} from 'react-redux';


const Item = (props) => {

    const isAdded = props.cart.find((item)=> item.id == props.id);

    return (
        <div className="item">
            <div className="item__image">

                <img src={props.img}/>
            </div>
            <h2>{props.name}</h2>
            <div className="item__buttons">
                <span className="btn btn-promo">
                    {props.discount}
                </span>
                {
                    (!isAdded)? <span className="btn btn-default" onClick={props.onItemClick}>{props.price}</span> : <span className="btn btn-default" onClick={()=> props.onRemoveClick(props.id)}>REMOVE</span>
                }
            </div>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        cart: state.cart
        // item: state.item,
        // inCart: state.inCart,
        // opened: state.opened,
        // status: state.status,
        // items: state.items
    }
}


export default connect(mapStateToProps)(Item);