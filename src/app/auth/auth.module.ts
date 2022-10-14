import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { AuthComponent } from './auth.component';
import { NgModule } from "@angular/core";

@NgModule({
  declarations : [
    AuthComponent
  ],
  imports : [
    SharedModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path : 'auth' , component : AuthComponent }
    ])
  ]
})

export class AuthModule { }
