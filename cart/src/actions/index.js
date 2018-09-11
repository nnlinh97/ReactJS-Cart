import * as types from './../constants/ActionTypes';


export const actionAddToCart = (product, quantity) => {
    return {
        type: types.ADD_PRODUCT_TO_CART,
        product: product,
        quantity: quantity
    }
}

export const actionChangeMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        message: message
    }
}

export const actionRemoveProductInCart = (product) => {
    return {
        type: types.DELETE_PRODUCT_IN_CART,
        product: product
    }
}