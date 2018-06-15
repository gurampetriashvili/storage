import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import {Menu} from '../types';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Products[];


  constructor(private prodService: ProductsService) { }
  getproducts(): void {
    this.prodService.myMenus().subscribe(menus => this.menus = menus);

  }
  ngOnInit() {
    this.getproducts();
  }

}
