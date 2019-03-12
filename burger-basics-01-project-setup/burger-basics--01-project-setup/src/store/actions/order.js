import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        oderdData: orderData
    };
};

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.purchaseBurgerFail,
        error: error
    };
};

export const purchaseBurgerStart = (orderData) => {
    return dispatch => {
        axios.post('/orders.json', order)
            .then((response) => {
                dispatch(purchaseBurgerSuccess(response.data, orderData))
            })
            .catch(error => {
                dispatch(purchaseBurgerFail(error));
            });
    }
}