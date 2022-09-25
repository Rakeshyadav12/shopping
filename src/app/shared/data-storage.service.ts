import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn : 'root'
})
export class DataStorageService {

  constructor( private recipeService : RecipeService, private http : HttpClient) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(
      'https://angular-shopping-cb49d-default-rtdb.firebaseio.com/recipes.json',
      recipes
    ).subscribe(
      recipes => {
        console.log(recipes);
      }
    );
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>('https://angular-shopping-cb49d-default-rtdb.firebaseio.com/recipes.json')
      .pipe(
        map( recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients : recipe.ingredients ? recipe.ingredients : []
            }
          })
        }),
        tap( recipes => {
          this.recipeService.setRecipes( recipes );
        })
      )
  }

}
