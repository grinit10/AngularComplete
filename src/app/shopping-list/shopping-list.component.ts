import { ShoppingService } from "./shopping.service";
import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/models/ingredient";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  public selectdIngrdnt: Ingredient;

  selectIngredient(ingrdnt) {
    this.selectdIngrdnt = ingrdnt;
  }

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();

    this.shoppingService.addIngredientEvent.subscribe(
      (ingrednt: Ingredient) => {
        this.ingredients.push(ingrednt);
      }
    );

    this.shoppingService.addIngredientsEvent.subscribe(
      (ingrednts: Ingredient[]) => {
        ingrednts.forEach(ingrednt => {
          this.ingredients.push(ingrednt);
        });
      }
    );
  }
}
