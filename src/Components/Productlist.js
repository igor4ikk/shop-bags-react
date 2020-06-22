import React, { Component } from 'react';
import Title from "./title";
import listStyled from "./component.view";
import Product from "./Product";
import {ProductConsumer} from "./../context";
import {storeProducts} from "./../date";


export default class Productlist extends Component {
    state ={
        products: storeProducts
    };

    render() {
        return (
           
                <listStyled.productListRow>
                    <Title name = "Our" product = "Products"/>
                    <listStyled.productList >
                            <ProductConsumer>
                                {(value) => {
                                    return value.products.map((product) =>{
                                        return <Product key={product.id} product={product} />;
                                    });
                                }}
                            </ProductConsumer>  
                    </listStyled.productList>
                </listStyled.productListRow>
           
        )
    }
}
