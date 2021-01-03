import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  styles : [
    "../../assets/css/plugins/fontawesome-free/css/all.min.css",
    "../../assets/css/plugins/icheck-bootstrap/icheck-bootstrap.min.css",
    "../../assets/css/dist/css/adminlte.min.css",
  ]
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

  }
  
  moveTo() {
    console.log('router router')
    this.router.navigate(['/rabback/home']);
  }

}
