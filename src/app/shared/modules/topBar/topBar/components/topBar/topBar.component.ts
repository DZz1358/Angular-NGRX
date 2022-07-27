import { AuthStateInterface } from './../../../../../../auth/shared/types/authState.interface';
import { currentUserSelector, isAnonymousSelector } from './../../../../../../auth/store/selectors';
import { CurrentUserInterface } from './../../../../../types/currentUser.interface';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { isLoggedInSelector } from 'src/app/auth/store/selectors';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';

@Component({
  selector: 'app-topBar',
  templateUrl: './topBar.component.html',
})
export class TopBarComponent implements OnInit {
  isLoggedIn$!: Observable<boolean | null>
  isAnonymous$!: Observable<boolean | null>
  currentUser$!: Observable<CurrentUserInterface | null>

  constructor(
    private store: Store<AppStateInterface>
  ) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector))
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
  }

}
