import React, { Component } from 'react';
// import ProductItem from './ProductItem';

class ProductsList extends Component {
    // showProducts(products) {
    //     let result = null;
    //     if (products.length > 0) {
    //         result = products.map((product, index) => {
    //             return <ProductItem
    //                 key={index}
    //                 product={product}
    //             />
    //         });
    //     }
    //     return result;
    // }
    render() {
        // let { products } = this.props;
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    {this.props.children}
                </div>

            </section>
        );
    }
}

export default ProductsList;