import { Component, EventEmitter, Output } from '@angular/core';
import { MenuItem } from '../../../models/menu-item.model';
import { MENUITEMS_MOCKS } from '../../../mocks/menu.mock';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule,MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  @Output() clickMenu = new EventEmitter<boolean>();
  menuItems : MenuItem[] = [];

  activeIndex: number | null = null;

  constructor(){
    this.menuItems = MENUITEMS_MOCKS;
  }

  pressClick(hasChildren : boolean = false){
    this.clickMenu.emit(!hasChildren)
  }

  toggleMenu(index: number) {
    
    this.activeIndex = this.activeIndex === index ? null : index;
    console.log(this.activeIndex,index);
  }

}
