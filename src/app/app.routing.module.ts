import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";

const appRoutes: Routes = [
  { path: "recipes", component: RecipesComponent },
  { path: "shoppiing-list", component: ShoppingListComponent },
  { path: "", redirectTo: "/recipes", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
