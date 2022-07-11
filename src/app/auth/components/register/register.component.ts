import { AppStateInterface } from './../../../shared/types/appState.interface';
import { isSubmittingSelector } from './../../store/selectors';
import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { registerAction } from '../../store/actions/register.action';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup
  isSubmitting$: Observable<boolean> | undefined

  constructor(
    private fb: UntypedFormBuilder,
    private store: Store<AppStateInterface>
  ) { }

  ngOnInit() {
    this.formInit()
    this.initValues()
  }

  initValues():void{
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
  }

  formInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  
  onSubmit():void{
    console.log(this.form.value);
    this.store.dispatch(registerAction(this.form.value))
  }
}
