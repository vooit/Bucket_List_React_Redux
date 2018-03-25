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
            <div className="buttons">
                <h2>{props.name}</h2>
                <button className="item__button"
                        onClick={props.onItemClick}>
                    {props.status}
                </button>
            </div>
        </div>
    )
};
export default Item;