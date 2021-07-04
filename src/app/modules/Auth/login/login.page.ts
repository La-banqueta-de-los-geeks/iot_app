import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  }
  constructor(public router: Router) {}

  ngOnInit() {}

  async register() {
    await this.router.navigateByUrl('register');
  }
  async signIn() {
    await this.router.navigateByUrl('signin');
  }
}
