/**
 * Created by Wojtek on 2018-03-24.
 */
import React from 'react';


const Item = (props) => {
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
                <span className="btn btn-default"
                      onClick={props.onItemClick}>
                    {props.price}
                </span>
            </div>
        </div>
    )
};
export default Item;