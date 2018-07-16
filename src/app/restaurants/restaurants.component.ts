import { Component, OnInit } from '@angular/core';
import { SearchService } from '../resources/search.service';
import { Restaurant } from "../restaurants/restaurant/restaurant.model"

import { map } from 'rxjs/operators';

@Component({
  selector: 'meat-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  loader = true;
  restaurants: Restaurant[];

  constructor(private $searchService: SearchService) {
  }

  showRestaurants() {

    this.$searchService.getRestaurants().subscribe( subGetRestaurants => {
      this.restaurants = subGetRestaurants;
      this.loader = false;  
    }, 
    error => { 
      console.error(error);
      alert(error.statusText);
      this.loader = false; 
    }
    
  ); 

  }

  ngOnInit() {
    this.showRestaurants();
  }

}
