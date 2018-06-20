import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import {Products} from '../types';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Products[];

  constructor(private prodService: ProductsService) { }
  getproducts(): void {
    this.prodService.myMenus().subscribe(products => this.products = products);

  }
  hasImage(a) {
    let img;
    if ( a.image === '') {
      img = 'assets/uploads/noimage.png';
    } else {
      img = a.image;
    }
    return img;
  }
  ngOnInit() {
    this.getproducts();
  }

}
