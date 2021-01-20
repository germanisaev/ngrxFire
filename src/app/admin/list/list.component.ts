import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/data.json'; 

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products: any = (data as any).default;
  
  constructor() { }

  ngOnInit() {
    console.table(this.products);
  }

}
