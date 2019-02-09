import React from 'react';

import classes from './Burger.css';
import BurgerIngedient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    const trasformedIngredient = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngedient key={igKey + i} type={igKey} />;
            });
        });

    return (
        <div className={classes.Burger}>
            <BurgerIngedient type="bread-top" />
            {trasformedIngredient}
            <BurgerIngedient type="bread-bottom" />
        </div>
    );
}

export default burger;