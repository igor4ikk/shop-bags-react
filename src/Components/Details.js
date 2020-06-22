import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {ProductConsumer} from "./../context";
import ditailStyle from "./component.view";

export default class Details extends Component {
    render() {
        return (
                <ProductConsumer>
                    {value =>{
                      const {id, title, img, price, company, info, inCart} = value.detailProduct;
                  
                      return(
                        <ditailStyle.detailsrow>
                            <div className = "detail-row">
                                <div className ="detailHead">
                                    <h2 className = "title">{title}</h2>
                                    <img src = {img} alt ="foto-detail" className = "detail-img"/>
                                </div>
                                <div className = "detailFooter">
                                    <h2>Company: {company}</h2>
                                    <p>Price: {price} $</p>
                                    <p>{info}</p>
                                </div>
                               
                            </div>
                            <ditailStyle.footerbtn>
                                <Link to ="/">
                                    <button className ="btnfooter" > 
                                        Back to start
                                    </button>
                                </Link>

                                <button  className ="btnfooter" disabled = {inCart ? true : false}
                                onClick = {() =>{
                                    value.addCardMethod(id);
                                    value.openModal(id);
                                }}>
                                   {inCart ? "In my Card" : "Add to Card"}
                                </button>
                            </ditailStyle.footerbtn>
                                
                        </ditailStyle.detailsrow>
                    )
                  }}
                   
                </ProductConsumer>
        )
    }
}
