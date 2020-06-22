import React, { Component } from 'react';
import {ProductConsumer} from "./../context";
import {Link} from "react-router-dom";
import productStyle from "./component.view";
import propTypes from "prop-types";


export default class Product extends Component {
    render() {
        const {id, title, img, price, company, info, inCart} = this.props.product;
        return (
            <productStyle.productrow>
                <div className = "card">
                   <ProductConsumer>
                       {value => (
                        <div className ="img-container" onClick = {() => value.handlMethod(id)}>
                            <Link to = "/details">
                                <img src ={img} alt = "img" className ="product-img"/>
                            </Link>

                            <productStyle.btnbuy disabled = {inCart ? true : false} 
                            onClick = {() => {
                            value.addCardMethod(id);
                            value.openModal(id);
                            }}>
                            
                            {inCart ? (<span disabled>inCart</span>) : <i>Buy</i>}
                            </productStyle.btnbuy>
                        </div>
                        )}
                    </ProductConsumer>
                    <div className = "card-footer">
                            <h4>{title}</h4>
                            <h3>
                                {price}<span> $ </span>
                            </h3>                  
                    </div>
                </div>
            </productStyle.productrow>
        )
    }
}

Product.propTypes= {
    product: propTypes.shape({
        id:propTypes.number,
        img:propTypes.string,
        title:propTypes.string,
        price:propTypes.number,
        inCart:propTypes.bool
    })
}