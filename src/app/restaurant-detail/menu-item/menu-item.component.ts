import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'meat-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem;

  constructor() { }

  ngOnInit() {
  }

}
