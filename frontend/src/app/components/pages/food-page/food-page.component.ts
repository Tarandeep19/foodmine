import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/Food';
import { CartService } from '../../../services/cart.service';
import { NotFoundComponent } from "../../partials/not-found/not-found.component";

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [RouterModule, CommonModule, NotFoundComponent], 
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  food!: Food;

  constructor(private activatedRoute: ActivatedRoute, private foodService: FoodService, 
    private cartService:CartService, private router: Router) {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        foodService.getFoodById(params.id).subscribe(serverFood => {
          this.food = serverFood;
        });      
      }
    });
  }

  setRating(food: Food, rating: number) {
    food.stars = rating;
  }

  ngOnInit(): void {}

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
