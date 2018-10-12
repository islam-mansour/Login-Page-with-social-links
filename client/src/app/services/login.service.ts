import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';


import { User } from '../models/user';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  authUser(user:User) {
    return this.http.post('http://127.0.0.1:8000/api/auth', user);
  }

  twitterRedirect(){
    return this.http.get('http://127.0.0.1:8000/api/redirect');
  }

}
