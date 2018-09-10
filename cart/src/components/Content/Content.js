import React, { Component } from 'react';
import CartList from './Cart/CartList';
// import ProductsList from './Products/ProductsList';
import Message from './Message/Message';
import ProductsContainer from './../../containers/ProductsContainer';

class Content extends Component {
    render() {
        return (
            <main id="mainContainer">
                <div className="container">
                    {/* <ProductsList /> */}
                    <ProductsContainer/>
                    <Message />
                    <CartList />
                </div>
            </main>
        );
    }
}

export default Content;