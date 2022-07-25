import { LoginComponent } from './components/login/login.component';
import { LoginEffect } from './store/effects/login.effect';
import { PersistanceService } from './../shared/services/persistance.service';
import { RegisterEffect } from './store/effects/register.effect';
import { AuthService } from './services/auth.service';
import { StoreModule } from '@ngrx/store';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './components/register/register.component';
import { reducer } from './store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backendErrorMessages.module';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
]

@NgModule({
  imports: [
    CommonModule,
    BackendErrorMessagesModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    EffectsModule.forFeature([RegisterEffect, LoginEffect]),
    StoreModule.forFeature('auth', reducer)
  ],
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  providers: [
    AuthService,
    PersistanceService
  ]
})
export class AuthModule { }
