import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredient : Ingredient;
  ingredients : Ingredient[] = [
    new Ingredient("Apples",5),
    new Ingredient("Oranges", 20),
    new Ingredient("Bananas", 12)
  ];

  constructor() { }

  ngOnInit(): void {

  }

  onIngredientAdded(ingredient : Ingredient){
    this.ingredients.push(ingredient);
  }

}
