import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test recipe name', 'Test description',
      'https://insurancemarket.ng/images/thumbnails/649/220/detailed/3/26e178f_e3xl-u9.png')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
