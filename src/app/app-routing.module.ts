import { AuthComponent } from './auth/auth.component';
import { RecipeRecolverService } from './recipes/recipe-resolver.service';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from './auth/auth.guard';

const appRoutes : Routes = [
  { path: '', redirectTo : '/auth', pathMatch: 'full'},
  { path: 'recipes' , component : RecipesComponent , canActivate: [AuthGuard] , children : [
    { path : '' , component : RecipeStartComponent },
    { path : 'new' , component : RecipeEditComponent },
    {
      path : ':id' ,
      component : RecipeDetailComponent ,
      resolve : [ RecipeRecolverService ]
    },
    {
      path : ':id/edit' ,
      component : RecipeEditComponent ,
      resolve : [ RecipeRecolverService ]
    }
  ]},
  { path: 'shopping-list' , component : ShoppingListComponent },
  { path : 'auth' , component : AuthComponent }
];

@NgModule({
  imports : [
    RouterModule.forRoot(appRoutes)
  ],
  exports : [ RouterModule ]
})
export class AppRoutingModule {

}
