import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SearchService } from '../../resources/search.service';
import { MenuItem } from '../menu-item/menu-item.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'meat-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  constructor(private SearchService: SearchService, private route: ActivatedRoute) {
    
  }
  
  ngOnInit() {
    this.menu = this.SearchService.menuOfRestaurant(this.route.snapshot.params['restaurantUrl']);
  }

  // addMenuItem(item: MenuItem){
  //   console.log(item);
  // }

}
