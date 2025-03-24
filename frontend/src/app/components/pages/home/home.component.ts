import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from "../../partials/search/search.component";
import { TagsComponent } from "../../partials/tags/tags.component";
import { NotFoundComponent } from "../../partials/not-found/not-found.component";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, SearchComponent, TagsComponent, NotFoundComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  foods: Food[] = [];
   constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
    let foodsObservalbe:Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        foodsObservalbe = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);      
      else if (params.tag)
        foodsObservalbe = this.foodService.getAllFoodsByTag(params.tag);      
      else
      foodsObservalbe = foodService.getAll();
    
      foodsObservalbe.subscribe((serverFoods) => {
        this.foods = serverFoods;
      })
    })
  }

  setRating(food: Food, rating: number) {
    food.stars = rating;
  }
}
