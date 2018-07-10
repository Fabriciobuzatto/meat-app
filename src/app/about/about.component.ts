import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'meat-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  teste:string = "ola mundo";

  constructor() { 
    console.log(this.teste);
  }

  ngOnInit() {
    
  }

}
