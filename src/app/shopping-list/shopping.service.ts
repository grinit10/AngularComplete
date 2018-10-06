import { Ingredient } from "../shared/models/ingredient";
import { EventEmitter } from "@angular/core";

export class ShoppingService {
  private _ingredients: Ingredient[] = [
    new Ingredient("Apple", 5),
    new Ingredient("Banana", 10)
  ];

  public addIngredientEvent = new EventEmitter<Ingredient>();
  public addIngredientsEvent = new EventEmitter<Ingredient[]>();

  public getIngredients() {
    return this._ingredients.slice();
  }
}
