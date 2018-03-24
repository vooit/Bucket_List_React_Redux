/**
 * Created by Wojtek on 2018-03-24.
 */
import React from 'react';

class Item extends React.Component {
    constructor(props) {
        super();

    }
    render(){
        return (
            <div onClick={this.props.onItemClick}>
                <div>
                    <span>{this.props.id}</span>
                    <h2>{this.props.name}</h2>
                    <div>
                        <img src={import(this.props.img)} />
                    </div>
                </div>
            </div>
        )
    }

};
export default Item;