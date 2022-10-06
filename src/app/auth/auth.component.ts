import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, AuthResponseData } from './auth.service';
import { NgForm } from '@angular/forms';
import { Component } from "@angular/core";

@Component({
  selector : 'app-auth',
  templateUrl : 'auth.component.html'
})

export class AuthComponent {

  constructor( private authService : AuthService , private router : Router ) {}

  isLoginMode = true ;
  isLoading = false ;
  error : string = null ;

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form : NgForm ) {

    if( !form.valid ) {
      return;
    }

    const email = form.value.email ;
    const password = form.value.password ;

    let authObs : Observable<AuthResponseData> ;

    this.isLoading = true ;
    if ( this.isLoginMode ) {
      authObs = this.authService.logIn( email , password )
    } else {
      authObs = this.authService.signUp( email, password )
    }
     authObs.subscribe(
      responseData => {
        console.log(responseData);
        this.isLoading = false ;
        this.router.navigate(['/recipes']) ;
      }, errorMessage => {
        this.error = errorMessage ;
        this.isLoading = false ;
      }
    )
    form.reset();
  }

}
