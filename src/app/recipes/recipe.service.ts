import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {


  private recipes: Recipe[] = [
    new Recipe(
      'Test recipe name',
      'Test description 1',
      'https://insurancemarket.ng/images/thumbnails/649/220/detailed/3/26e178f_e3xl-u9.png',
      [
        new Ingredient('ice', 2)
      ]),
    new Recipe(
      'Test recipe name',
      'Test description 2',
      'https://insurancemarket.ng/images/thumbnails/649/220/detailed/3/26e178f_e3xl-u9.png',
      [
        new Ingredient('ccc', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
