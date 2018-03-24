/**
 * Created by Wojtek on 2018-03-22.
 */

import React from 'react';
import Header from './header';
import items from '../data/items.json';
import Item from './item';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            cart: []
        }
    }

    componentDidMount() {
        this.setState({
            items: items
        });
    }


    onItemClick(item) {
        console.log(item.id)
    }


    render() {
        return (
            <div>
                <Header/>

                <ul>
                    {this.state.items.map(item => {
                        return (<Item {...item} key={item.id}
                                      onDeleteClicked={this.onItemClick.bind(this, item)}/>);
                    })}
                </ul>
            </div>
        )
    }
}