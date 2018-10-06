import { Ingredient } from "./../../shared/models/ingredient";
import { ShoppingService } from "./../../shopping-list/shopping.service";
import { Recipe } from "./../recipe-list/models/recipe";
import { RecipeService } from "./../recipe.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(
    private recipeService: RecipeService,
    private shoppingService: ShoppingService
  ) {}

  addToShoppingList(ingrdnts: Ingredient[]) {
    this.shoppingService.addIngredientsEvent.emit(ingrdnts);
  }

  ngOnInit() {
    this.recipeService.selectRecipe.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}
