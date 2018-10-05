import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/models/ingredient";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Apple", 5),
    new Ingredient("Banana", 10)
  ];

  public selectdIngrdnt: Ingredient;

  selectIngredient(ingrdnt) {
    this.selectdIngrdnt = ingrdnt;
  }

  onaddIngredientEvent(ingrdnt: Ingredient) {
    this.ingredients.push(ingrdnt);
  }
  constructor() {}

  ngOnInit() {}
}
