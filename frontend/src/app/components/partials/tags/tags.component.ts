import { Component } from '@angular/core';
import { Tag } from '../../../shared/models/Tag';
import { FoodService } from '../../../services/food.service';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-tags',
  imports: [RouterLink,NgIf],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {

  tags?:Tag[];
   constructor(foodService:FoodService) {
    foodService.getAllTags().subscribe(serverTags => {
      this.tags = serverTags;
    });    
  }
}
