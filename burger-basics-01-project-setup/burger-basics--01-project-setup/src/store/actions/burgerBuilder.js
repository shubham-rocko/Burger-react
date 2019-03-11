import * as actionTypes from './actionTypes';

export const addIngredients = (ingName) => {
    return { 
        type: actionTypes.ADD_INGREDIENT, 
        ingredientName: ingName 
    };
};

export const removeIngredients = (ingName) => {
    return { 
        type: actionTypes.REMOVE_INGREDIENT, 
        ingredientName: ingName 
    };
};