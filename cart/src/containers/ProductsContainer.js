import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductsList from '../components/Content/Products/ProductsList';
import ProductItem from '../components/Content/Products/ProductItem';
import PropTypes from 'prop-types';
import * as actions from './../actions/index'

class ProductsContainer extends Component {

    render() {
        let { products } = this.props;
        return (
            <div>
                <ProductsList>
                    {this.showProducts(products)}
                </ProductsList>
            </div>
        );
    }

    showProducts(products) {
        let result = null;
        let { onAddToCart, onchangeMessage } = this.props;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem
                    key={index}
                    product={product}
                    onAddToCart={onAddToCart}
                    onchangeMessage={onchangeMessage}
                />
            });
        }
        return result;
    }

}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            desctiption: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired, //phải là một array và phải có phần tử
    onchangeMessage: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actions.actionAddToCart(product, 1));
        },
        onchangeMessage: (message) => {
            dispatch(actions.actionChangeMessage(message));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);