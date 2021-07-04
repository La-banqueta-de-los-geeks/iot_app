import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/interfaces/auth.interface';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private storage: Storage,
    public router: Router
  ) {
    this.storage.create();
  }

  // return an observable with a user-facing error message
  //return throwError('Something bad happened; please try again later.');

  Login(email, password): Promise<any> {
    try {
      return this.http
        .post(environment.url + 'v1/users/login/', {
          user: {
            email: email,
            password: password,
          },
          headers: new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
          }),
        })
        .toPromise()
        .then((res) => {
          this.storage.set('userToken', res['user'].token.token);
          this.storage.set('orgToken', res['organization'].token.token);
          return res;
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.error(error);
    }
  }

  Register(email, password, organization): Promise<any> {
    try {
      return this.http
        .post(environment.url + 'v1/users/', {
          user: {
            email: email,
            password: password,
            organization_attributes: {
              name: organization,
            },
          },
          headers: new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
          }),
        })
        .toPromise()
        .then((res) => res)
        .catch((err) => console.log(err));
    } catch (error) {
      console.error(error);
    }
  }

  async isAuthenticated() {
    const apiToken = (await this.storage.get('userToken')) || null;
    if (apiToken) {
      return true;
    } else {
      return false;
    }
  }

}
