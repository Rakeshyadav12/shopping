import { Recipe } from './recipe.model';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  public selectedRecipe : Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
