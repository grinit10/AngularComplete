import { Component, OnInit, Input } from "@angular/core";
import { Ingredient } from "../../shared/models/ingredient";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  @Input()
  selectedIngredient: Ingredient;

  constructor() {}

  ngOnInit() {}
}
