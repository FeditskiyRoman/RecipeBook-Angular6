import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test recipe name', 'Test description 1',
      'https://insurancemarket.ng/images/thumbnails/649/220/detailed/3/26e178f_e3xl-u9.png'),
    new Recipe('Test recipe name', 'Test description 2',
      'https://insurancemarket.ng/images/thumbnails/649/220/detailed/3/26e178f_e3xl-u9.png')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
