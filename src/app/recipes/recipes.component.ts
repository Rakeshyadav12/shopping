import { RecipeService } from './recipe.service';
import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers : [ RecipeService ]
})
export class RecipesComponent implements OnInit , OnDestroy {

  // public firstObs;

  constructor( ) { }

  ngOnInit(): void {
    // this.recipeService.recipeSelected
    //   .subscribe(
    //     (recipe : Recipe) => {
    //       this.selectedRecipe = recipe;
    //     }
    //   )

    // const firstOne = interval(1000).subscribe( count => {
    //   console.log(count);
    // })

  //   const customObservable = Observable.create( observer => {
  //     let count = 0;
  //     setInterval( () => {
  //       if( count === 8 ) {
  //         observer.complete();
  //       }
  //       if( count > 5) {
  //         observer.error(new Error("count is greater than 5!"))
  //       }
  //       observer.next(count);
  //       count++;
  //     } , 1000 );
  //   })

  //   this.firstObs = customObservable.subscribe( (data) => {
  //     console.log(data);
  //   }, error => {
  //     console.log(error);
  //     alert(error);
  //   }, () => {
  //     console.log(" completed ");
  //   })
  }

  ngOnDestroy(): void {
  //   this.firstObs.unsubscribe();
  }

}
