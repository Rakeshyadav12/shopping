import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers : [ RecipeService ]
})
export class RecipesComponent implements OnInit {

  public selectedRecipe : Recipe;

  constructor( private recipeService : RecipeService ) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected
      .subscribe(
        (recipe : Recipe) => {
          this.selectedRecipe = recipe;
        }
      )
  }

}
