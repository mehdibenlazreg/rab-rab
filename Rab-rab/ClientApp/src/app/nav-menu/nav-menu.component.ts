import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  menu : any[];
  selectedMenu : any;
  constructor(router : Router) { 
    
  }

  ngOnInit() {
    this.menu = [
      {name:"Home", isActive:true,link:""},
      {name:"Portfolio", isActive:false,link:"portfolio"},
      {name:"Shop", isActive:false,link:"shop"},
      {name:"About us", isActive:false,link:"about"},
      {name:"Contact us", isActive:false,link:"contact"}
    ];
    this.selectedMenu = this.menu[0];
    
  }

  changeSnap(menu : any) {
    let menuObj = this.menu.filter(x => x.name == menu.name);
    let currentMenuObj = this.menu.filter(x => x.name == this.selectedMenu.name);
    currentMenuObj[0].isActive= false;
    menuObj[0].isActive = true;
    this.selectedMenu = menuObj[0];
    console.log('currentMenuObj', currentMenuObj)
    console.log('menuObj', menuObj)
    console.log('menu', this.menu)
    
  }

}
