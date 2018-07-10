import { RouterModule, Routes } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AboutComponent } from './about/about.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';

const appRoutes: Routes  = [
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'restaurants/:restaurantUrl', component: RestaurantDetailComponent }
];

export const routing = RouterModule.forRoot(appRoutes);