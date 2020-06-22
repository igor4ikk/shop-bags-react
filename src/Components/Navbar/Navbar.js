import React, { Component } from 'react';
import  "./style.css";
import {Link} from 'react-router-dom';
import Favicon from "./bag-n.png";
import buy from "./buy-bags.png";

export default class Navbar extends Component {
    render() {
        return (
            <nav className = 'navbox'>   
                <div className = "navrow">
                    <Link to = '/'>
                        <img src = {Favicon} alt = "logo" className = "imglogo"/>   
                    </Link>           
                     <ul className = "navwrapper">
                        <li className = "navbar"> 
                            <Link to = '/' className = "products">
                               Our products
                            </Link>   
                        </li>              
                    </ul>
                </div>  
               <div className = "nav-wrap">
                    <Link to = "/card">
                    <button className = "btn-buy"><span>Buy</span>
                        <img src = {buy} alt = "btnbuy" className = "img-buy"/>
                     </button>
                    </Link> 
               </div>
              
            </nav>
        )
    }
}
