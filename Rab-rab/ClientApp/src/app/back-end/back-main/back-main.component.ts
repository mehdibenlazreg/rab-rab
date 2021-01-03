import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-back-main',
  templateUrl: './back-main.component.html',
  styleUrls: ['./back-main.component.css']
})
export class BackMainComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  disconnect() {
    console.log('router router')
    this.router.navigate(['/rabback/login']);
  }
}
