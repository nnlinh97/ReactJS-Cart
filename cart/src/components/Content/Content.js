import React, { Component } from 'react';
// import CartList from './Cart/CartList';
// import ProductsList from './Products/ProductsList';
// import Message from './Message/Message';
import ProductsContainer from './../../containers/ProductsContainer';
import CartContainer from '../../containers/CartContainer';
import MessageContainer from '../../containers/MessageContainer';

class Content extends Component {
    render() {
        return (
            <main id="mainContainer">
                <div className="container">
                    {/* <ProductsList /> */}
                    <ProductsContainer/>
                    {/* <Message /> */}
                    {/* <CartList /> */}
                    <MessageContainer/>
                    <CartContainer/>
                </div>
            </main>
        );
    }
}

export default Content;