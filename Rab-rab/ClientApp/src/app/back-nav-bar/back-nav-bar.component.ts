import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-back-nav-bar',
  templateUrl: './back-nav-bar.component.html',
  styleUrls: ['./back-nav-bar.component.css']
})
export class BackNavBarComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  isCollapsed : boolean = false;
  
  ngOnInit() {
  }

  disconnect() {
    console.log('router router')
    this.router.navigate(['/rabback/login']);
  }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
    let d = document.getElementById("toggle");
    if(this.isCollapsed) {
      d.className += " sidebar-collapse";
    } else {
      d.classList.remove("sidebar-collapse");
    }
  }

}
