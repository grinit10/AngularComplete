import { Recipe } from "./recipe-list/models/recipe";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/models/ingredient";

export class RecipeService {
  private _recipes: Recipe[] = [
    new Recipe(
      "Test Recipe",
      "This recipe is fake",
      "https://hips.hearstapps.com/del.h-cdn.co/assets/17/34/2048x1024/landscape-1503418862-chicken-thighs-delish.jpg?resize=1200:*",
      [new Ingredient("Chicken thigh", 2), new Ingredient("Rice", 500)]
    ),
    new Recipe(
      "Second Test Recipe",
      "This tthe second recipe which is fake",
      "https://hips.hearstapps.com/del.h-cdn.co/assets/17/34/2048x1024/landscape-1503418862-chicken-thighs-delish.jpg?resize=1200:*",
      [new Ingredient("Vegetables", 10)]
    )
  ];

  public selectRecipe = new EventEmitter<Recipe>();

  getRecipes() {
    return this._recipes.slice();
  }
}
