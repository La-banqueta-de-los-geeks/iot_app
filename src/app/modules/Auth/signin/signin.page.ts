import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  formLogin: FormGroup;
  dataAuth = {};
  constructor(
    public router: Router,
    private fb: FormBuilder,
    public auth: AuthService,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    this.formLogin = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  async message(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
    });
    toast.present();
  }
  signIn() {
    try {
      const email = this.formLogin.get('email').value;
      const password = this.formLogin.get('password').value;
      this.auth.Login(email, password).then((data) => {
        if (data) {
          this.message('Welcome, you started the session in vurotron!');
          this.router.navigateByUrl("/tabs/home")
        } else {
          this.message(
            'You have problems to start session please review your email and password'
          );
        }
      });
    } catch (error) {
      this.message(error)
    }
  }
}
