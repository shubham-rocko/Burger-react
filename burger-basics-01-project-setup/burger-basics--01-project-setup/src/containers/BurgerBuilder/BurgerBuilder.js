import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchaseable: false
  };

  updatePurchaseState(updatedIngredients) {
    const ingredients = {...updatedIngredients};
    const sum = Object.keys(ingredients)
    .map(igKey => {
      return ingredients[igKey];
    }).reduce((sum, amount) => {
      return sum+amount;
    }, 0)
    this.setState({purchaseable: sum>0});
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice+priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    // if(this.state.ingredients[type]){
      const oldCount = this.state.ingredients[type];
      const updatedCount = oldCount-1;
      const updatedIngredients = {...this.state.ingredients};
      updatedIngredients[type] = updatedCount;
      const priceSubtraction = INGREDIENT_PRICE[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice-priceSubtraction;
      this.setState({
        totalPrice: newPrice,
        ingredients: updatedIngredients
      });
      this.updatePurchaseState(updatedIngredients);
    // }
  }

  render() {
    const disableInfo = {
      ...this.state.ingredients
    };
    for(let key in disableInfo){
      disableInfo[key] = disableInfo[key] <= 0;
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
        ingredientAdded={this.addIngredientHandler}
        ingredientRemove={this.removeIngredientHandler} 
        disabled={disableInfo}
        purchaseable = {this.state.purchaseable}
        price={this.state.totalPrice}/>
      </Aux>
    );
  }
}

export default BurgerBuilder;
