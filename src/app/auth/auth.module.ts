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
]

@NgModule({
  imports: [
    CommonModule,
    BackendErrorMessagesModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    EffectsModule.forFeature([RegisterEffect]),
    StoreModule.forFeature('auth', reducer)
  ],
  declarations: [
    RegisterComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
