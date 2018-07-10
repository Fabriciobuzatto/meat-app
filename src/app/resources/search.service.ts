import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {Restaurant} from "../restaurants/restaurant/restaurant.model"

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

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

}
