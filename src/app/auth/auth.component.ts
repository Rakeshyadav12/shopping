import { PlaceholderDirective } from './../shared/placeholder/placeholder.directive';
import { AlertComponent } from './../shared/alert/alert.component';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService, AuthResponseData } from './auth.service';
import { NgForm } from '@angular/forms';
import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from "@angular/core";

@Component({
  selector : 'app-auth',
  templateUrl : 'auth.component.html'
})

export class AuthComponent implements OnDestroy {

  constructor( private authService : AuthService , private router : Router , private componentFactoryResolver : ComponentFactoryResolver ) {}

  isLoginMode = true ;
  isLoading = false ;
  error : string = null ;

  private closeSub : Subscription;

  @ViewChild(PlaceholderDirective , { static : false }) alertHost : PlaceholderDirective ;

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
        console.log( errorMessage ) ;
        this.showErrorAlert( errorMessage ) ;
        this.isLoading = false ;
      }
    )
    form.reset();
  }

  onHandleError() {
    this.error = null ;
  }

  showErrorAlert( message : string ) {

    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory( AlertComponent ) ;
    const hostViewContainerRef = this.alertHost.viewContainerRef ;
    hostViewContainerRef.clear() ;

    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory) ;
    componentRef.instance.message = message ;

    this.closeSub = componentRef.instance.close.subscribe( () => {
      this.closeSub.unsubscribe() ;
      hostViewContainerRef.clear() ;
    } )
  }

  ngOnDestroy(): void {
    if ( this.closeSub ) {
      this.closeSub.unsubscribe() ;
    }
  }

}
