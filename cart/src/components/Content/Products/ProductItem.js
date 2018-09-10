import React, { Component } from 'react';

class ProductItem extends Component {
    showRating(rating){
        let result = [];
        for (let i =0; i < rating; i++){
            result.push(<i key={i} className="fa fa-star"></i>);
        }
        for (let i =0; i < (5-rating); i++){
             result.push(<i key={5-i} className="fa fa-star-o"></i>);
        }
        return result;
    }
    render() {
        let {product} = this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.image} className="img-fluid" alt="" />
                        <a>
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a>{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            {this.showRating(product.rating)}
                        </ul>
                        <p className="card-text">
                            Sản phẩm do {product.description} sản xuất
                                    </p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductItem;