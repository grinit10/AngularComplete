import { ShoppingService } from "./../shopping.service";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Ingredient } from "../../shared/models/ingredient";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  @Input()
  selectedIngredient: Ingredient;

  constructor(private shoppingService: ShoppingService) {}

  onAddClick(name: string, amount: number) {
    this.shoppingService.addIngredientEvent.emit(new Ingredient(name, amount));
  }
  ngOnInit() {}
}
