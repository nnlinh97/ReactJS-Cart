import React, { Component } from 'react';
import * as Message from '../../../constants/Messages';

class CartItem extends Component {

    render() {
        let { cartItem } = this.props;
        let { quantity } = cartItem;
        return (
            <tr>
                <th scope="row">
                    <img src={cartItem.product.image}
                        alt="" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{cartItem.product.name}</strong>
                    </h5>
                </td>
                <td>{cartItem.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label onClick={() => this.onUpdateQuantity(cartItem.product, cartItem.quantity - 1)} className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                            <a>—</a>
                        </label>
                        <label onClick={() => this.onUpdateQuantity(cartItem.product, cartItem.quantity + 1)} className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{cartItem.product.price * cartItem.quantity}$</td>
                <td>
                    <button onClick={() => this.onDelete(cartItem.product)} type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item">
                        X
                    </button>
                </td>
            </tr>
        );
    }

    onUpdateQuantity = (product, quantity) => {
        if (quantity > 0) {
            this.props.onUpdateQuantityInCart(product, quantity);
            this.props.onchangeMessage(Message.MSG_CAP_NHAT_GIO_HANG_THANH_CONG);
        }
    }

    onDelete = (product) => {
        this.props.onDeleteProduct(product);
        this.props.onchangeMessage(Message.MSG_XOA_SAN_PHAM_THANH_CONG);
    }
}

export default CartItem;