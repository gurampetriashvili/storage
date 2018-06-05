import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import {Menu} from '../types';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menus: Menu[];

  getMenus(): void {
    this.menuService.myMenus().subscribe(menus => this.menus = menus);
  }
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.getMenus();
  }

}
