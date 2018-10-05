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

  @Output()
  addIngredientEvent = new EventEmitter<Ingredient>();
  constructor() {}

  onAddClick(name: string, amount: number) {
    this.addIngredientEvent.emit(new Ingredient(name, amount));
  }
  ngOnInit() {}
}
