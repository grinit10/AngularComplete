import { Recipe } from './models/recipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This recipe is fake',
      'https://hips.hearstapps.com/del.h-cdn.co/assets/17/34/2048x1024/landscape-1503418862-chicken-thighs-delish.jpg?resize=1200:*'
    ),
    new Recipe(
      'Second Test Recipe',
      'This tthe second recipe which is fake',
      'https://assets.blog.foodnetwork.ca/imageserve/wp-content/uploads/2018/01/02143436/vegetarian-cacciatore-recipe/x.jpg'
    )
  ];
  constructor() {}

  ngOnInit() {}
}
