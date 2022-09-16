import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

@Injectable()

export class RecipeService {

  constructor( private shoppingListService : ShoppingListService ) {  }
  private recipes : Recipe[] = [
    new Recipe(
      "A test recipe",
      "Test description",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZrcEYcq2_NAUJJZpCGoWus7K6zmmCdp2lFA&usqp=CAU",
      [
        new Ingredient(
          'Rice', 40
        ),
        new Ingredient(
          "Milk", 50
        )
      ]
      ),
    new Recipe(
      "Samosa",
      "One of the best snacks",
      "https://static.toiimg.com/thumb/61050397.cms?imgsize=246859&width=800&height=800",
      [
        new Ingredient(
        "CornFlour", 30
        ),
        new Ingredient(
          "Potato", 30
        )
      ]
      ),
    new Recipe(
      "Sweet Potato",
      "Great starters",
      "https://www.simplyrecipes.com/thmb/OCi18J2V8OeKDFV3FxoeKvgq74E=/1423x1067/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__07__grilled-sweet-potatoes-horiz-a-1600-7c8292daa98e4020b447f0dc97a45cb7.jpg",
      [
        new Ingredient(
          "Mirchi", 10
        ),
        new Ingredient(
          "Potato", 50
        )
      ]
      )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe( index : number ) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients : Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
