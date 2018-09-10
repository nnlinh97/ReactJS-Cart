import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductsList from '../components/Content/Products/ProductsList';
import ProductItem from '../components/Content/Products/ProductItem';
import PropTypes from 'prop-types';

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
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem
                    key={index}
                    product={product}
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
    ).isRequired //phải là một array và phải có phần tử
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}
export default connect(mapStateToProps, null)(ProductsContainer);