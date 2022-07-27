import { loginAction } from './../../store/actions/login.action';
import { LoginRequestInterface } from './../../shared/types/loginReauest.interface';
import { BackendErrorsInterface } from '../../../shared/types/backendErrors.interface';
import { AppStateInterface } from '../../../shared/types/appState.interface';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup
  isSubmitting$!: Observable<boolean> 
  backendErrors$!: Observable<BackendErrorsInterface | null>

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>,
  ) { }

  ngOnInit() {
    this.formInit()
    this.initValues()
  }

  initValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  formInit(): void {
    this.form = this.fb.group({
      email: '',
      password: '',
    })
  }

  onSubmit(): void {
    console.log(this.form.value);
    const request: LoginRequestInterface = {
      user: this.form.value
    }
    this.store.dispatch(loginAction({request}))
  }
}