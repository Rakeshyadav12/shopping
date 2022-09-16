import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';
import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers : [ RecipeService ]
})
export class RecipesComponent implements OnInit , OnDestroy {

  public selectedRecipe : Recipe;

  public firstObs;

  constructor( private recipeService : RecipeService ) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected
      .subscribe(
        (recipe : Recipe) => {
          this.selectedRecipe = recipe;
        }
      )

    // const firstOne = interval(1000).subscribe( count => {
    //   console.log(count);
    // })

    const customObservable = Observable.create( observer => {
      let count = 0;
      setInterval( () => {
        observer.next(count);
        count++;
      } , 1000 );
    })

    this.firstObs = customObservable.subscribe( (data) => {
      console.log(data);

    })
  }

  ngOnDestroy(): void {
    this.firstObs.unsubscribe();
  }

}
