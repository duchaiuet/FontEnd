import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication-layout',
  templateUrl: './authentication-layout.component.html',
  styleUrls: ['./authentication-layout.component.css']
})
export class AuthenticationLayoutComponent implements OnInit {

  constructor(private router: Router) { }

  public onlyView= true;
  ngOnInit() {
  }
  imageSlides = [
    'assets/1.jpg',
    'assets/6.jpg',
    'assets/3.jpg',
    'assets/4.jpg',
    'assets/book-791884_1920.jpg'
  ]

  moveToLogin() {
    this.onlyView = false;
    this.router.navigateByUrl('/welcome/login')
  }

}
