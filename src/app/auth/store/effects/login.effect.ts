import { loginAction, loginFailureAction, loginSuccessAction } from './../actions/login.action';
import { PersistanceService } from './../../../shared/services/persistance.service';
import { CurrentUserInterface } from './../../../shared/types/currentUser.interface';
import { AuthService } from './../../services/auth.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map, catchError, of, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()

export class LoginEffect {

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private persistanceService: PersistanceService,
        private router: Router
    ) { }

    login$ = createEffect(() => this.actions$.pipe(
        ofType(loginAction),
        switchMap(({ request }) => {
            return this.authService.login(request).pipe(
                map((currentUser: CurrentUserInterface) => {
                    this.persistanceService.set('accessToken', currentUser.token)
                    return loginSuccessAction({ currentUser })
                }),
                catchError((errorResponse: HttpErrorResponse) => {
                    return of(loginFailureAction({ errors: errorResponse.error.errors }))
                })
            )
        })
    ))

    redirectAfterSubmit$ = createEffect(() => this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
            this.router.navigateByUrl('/')
        })
    ),
        { dispatch: false }
    )
}