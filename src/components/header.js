/**
 * Created by Wojtek on 2018-03-22.
 */
import React from 'react';
import logo from '../assets/media/logo.png'
import Cart from './Cart';


const Header = () => {
    return (
        <div className="header">
            <div className="container flex">
                <div className="header__logo"><img src={logo}/></div>
               <Cart/>
            </div>
        </div>
    )
}
export default Header;