import React, { Component } from 'react';
import {storeProducts,detailProduct} from "./date";

const ProductContext = React.createContext();
//Provider;
// Consumer
class ProductProvider extends Component {

    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct
    };

    componentDidMount(){
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];

        storeProducts.forEach(item =>{
            const singleItem = {...item};
            // console.log(singleItem)
            tempProducts = [...tempProducts, singleItem]
        });
        this.setState(() =>{
            return {products: tempProducts}
        })
    }

    getItem = (id) =>{
        const product = this.state.products.find(item => item.id === id);
        return product;
    }


    handlMethod = (id) => {
        const product = this.getItem(id);
        this.setState(() =>{
            return {detailProduct: product};
        })
    }

    addCardMethod = id => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(
            () =>{
                return { products: tempProducts, cart: [...this.state.cart, product]};
            },
            () =>{
                console.log(this.state)
            }
        )
    }
    openModal = (id) =>{
        const product = this.getItem(id);
        this.setState(() =>{
            return {modalProduct:product, modalOpen: true }
        })
    }

    closeModal = () =>{
        this.setState(() =>{
            return {modalOpen: false}
        })
    }

    render() {
        return (
            <ProductContext.Provider value = {{
                ...this.state,
                handlMethod: this.handlMethod,
                addCardMethod: this.addCardMethod,
                openModal: this.openModal,
                closeModal: this.closeModal
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}


// ProductProvider крім цього імпортуємо у index.js