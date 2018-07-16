import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {Restaurant} from "../restaurants/restaurant/restaurant.model"

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: Http) { 
    this.http = http;
  }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get(`http://localhost:3000/restaurants`).pipe(
      map(res => res.json())
    );
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get(`http://localhost:3000/restaurants/${id}`).pipe(
      map(response => response.json())
    );      
  }

  menuOfRestaurant(restaurantUrl: string): Observable<MenuItem[]> {
    return this.http.get(`http://localhost:3000/restaurants/${restaurantUrl}/menu/`).pipe(
      map(response => response.json())
    );
  };

}
