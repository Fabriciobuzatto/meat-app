import { RouterModule, Routes } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes  = [
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'about', component: AboutComponent }
];

export const routing = RouterModule.forRoot(appRoutes);