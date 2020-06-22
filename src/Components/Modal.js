import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import modalstyle from './component.view';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) =>{
                    const {modalOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct;

                    if(!modalOpen){
                        return null;
                    }else{
                            return (
                            <modalstyle.modalbox>
                                <div className = "container">
                                    <div className ="row">
                                        <div id = "modal">
                                            <h5>Item added to the card</h5>
                                            <img src = {img} className = "modalimg" alt = "product"/>
                                            <h5>Title: {title}</h5>
                                            <h5>Price: {price} $</h5>
                                        </div>
                                        <Link to = "/" onClick={() =>closeModal()}>
                                          <button className = "backModal">Back to start</button>
                                        </Link>
                                        <Link to = "/card" onClick={() =>closeModal()}>
                                          <button className = "backModal">Go to Card</button>
                                        </Link>
                                        
                                    </div>
                                </div>
                            </modalstyle.modalbox>
                             ) }
                    
                }}
            </ProductConsumer>
        )
    }
}
