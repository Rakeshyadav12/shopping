import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: true}) nameInputRef : ElementRef ;
  @ViewChild('amountInput', {static: true}) amountInputRef : ElementRef ;

  name : string;
  amount : number;

  constructor( private shoppingListService : ShoppingListService ) { }

  ngOnInit(): void {
  }

  onAddItem(){
    let ingName = this.nameInputRef.nativeElement.value ;
    let ingAmount = this.amountInputRef.nativeElement.value ;
    let newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingListService.addIngredient(newIngredient);
  }

}
