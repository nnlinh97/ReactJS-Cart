import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CartList from '../components/Content/Cart/CartList';
import CartItem from '../components/Content/Cart/CartItem';
import * as Message from './../constants/Messages';
import CartResult from '../components/Content/Cart/CartResult';
import * as Actions from './../actions/index';

class CartContainer extends Component {
    render() {
        let { cart } = this.props;
        // console.log(cart);
        return (
            <div>
                <CartList>
                    {this.showCart(cart)}
                    {this.showTotalMoney(cart)}
                </CartList>
            </div>
        );
    }
    showCart(cart) {
        let result = Message.MSG_CART_EMPTY;
        let {onDeleteProduct} = this.props;
        if (cart.length > 0) {
            result = cart.map((cartItem, index) => {
                return <CartItem
                    key={index}
                    cartItem={cartItem}
                    onDeleteProduct={onDeleteProduct}
                />
            });
        }
        return result;
    }

    showTotalMoney(cart) {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].product.price * cart[i].quantity;
        }
        return <CartResult totalMoney={total} />;
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            desctiption: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired //phải là một array và phải có phần tử
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProduct: (product) => {
            dispatch(Actions.actionRemoveProductInCart(product))
        }
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);