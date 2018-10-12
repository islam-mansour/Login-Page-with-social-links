import { Component } from '@angular/core';

import { User } from '../../models/user';

import { LoginService } from '../../services/login.service';

import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private loginService: LoginService,
    private socialAuthService: AuthService
  ){}

  model = new User("John Doe", "dummy@domain.com", "11111");

  onSubmit(){
    console.log(this.model);
    this.loginService.authUser(this.model).subscribe(
      (res) => {
        console.log(res);
        /*
          TODO: redirect user to the profile
        */
      }
    );
  }

  public twitterSignIn(){
    this.loginService.twitterRedirect().subscribe(
      (userData) => {
        console.log("twitter user: " + userData);
      }
    );
  }

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + " sign in data : ", userData); 
        this.model.email = userData.email;
        this.model.password = userData.id;
        this.onSubmit();
      }
    );
  }


}