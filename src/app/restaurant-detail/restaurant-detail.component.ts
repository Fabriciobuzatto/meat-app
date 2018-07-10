import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SearchService } from '../resources/search.service';
import {Restaurant} from "../restaurants/restaurant/restaurant.model"

@Component({
  selector: 'meat-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit, OnDestroy {

  sub: Subscription;
  valorUrlFinal: string; 
  
  restaurantView: Restaurant; 

  constructor(private route: ActivatedRoute, private $searchService: SearchService) { 
    this.sub = this.route.params.subscribe( valorUrl => {
      this.valorUrlFinal = valorUrl.restaurantUrl;
      this.loaderRestaurant(this.valorUrlFinal);
     });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  loaderRestaurant(urlRestaurant){
    this.$searchService.restaurantById(urlRestaurant).subscribe( restaurantGet => {
      this.restaurantView = restaurantGet;
      //console.log(this.restaurantView)
    });
  }

}
