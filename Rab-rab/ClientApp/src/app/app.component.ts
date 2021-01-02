import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  isFrontEnd : boolean = true;
  constructor(location: Location) {
    let url = location.path();
    if(url.includes('rabback')) {
      this.isFrontEnd =  false;
    }
   }

  ngOnInit() {
  }
  title = 'app';
}
