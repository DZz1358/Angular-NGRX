import { RegisterRequestInterface } from './../../shared/types/registerRequest.interface';
import { CurrentUserInterface } from './../../../shared/types/currentUser.interface';
import { AuthService } from './../../services/auth.service';
import { registerAction, registerFailureAction, registerSuccessAction } from './../actions/register.action';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map, catchError, of } from 'rxjs';

@Injectable()

export class RegisterEffect {

    constructor(
        private actions$: Actions,
        private authService: AuthService
    ) { }

    register$ = createEffect(() => this.actions$.pipe(
        ofType(registerAction),
        switchMap(({ request }) => {
            return this.authService.register(request).pipe(
                map((currentUser: any) => {
                    return registerSuccessAction({currentUser})
                }),
                catchError(() => {
                    return of(registerFailureAction())
                })
            )
        })
    ))
}