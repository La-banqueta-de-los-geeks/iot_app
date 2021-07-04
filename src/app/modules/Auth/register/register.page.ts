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
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formRegister: FormGroup;
  dataAuth = {};
  constructor(
    private fb: FormBuilder,
    public router: Router,
    public authService: AuthService,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    this.formRegister = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      organization: new FormControl('', Validators.required),
    });
  }

  async message(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
    });
    toast.present();
  }

  Register() {
    try {
      const email = this.formRegister.get('email').value;
      const password = this.formRegister.get('password').value;
      const organization = this.formRegister.get('organization').value;
      this.authService.Register(email, password, organization).then((data) => {
        if (data) {
          this.message('You data was received, please signin in Vurotron app!');
          this.router.navigateByUrl('/login');
        } else {
          this.message(
            "You data wasn't received, please review the data that you sended!"
          );
        }
      });
    } catch (error) {
      this.message(error);
    }
  }
}