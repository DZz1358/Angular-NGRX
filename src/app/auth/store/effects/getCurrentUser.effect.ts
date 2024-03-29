import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from './../actions/getCurrentUser.action';
import { PersistanceService } from './../../../shared/services/persistance.service';
import { CurrentUserInterface } from './../../../shared/types/currentUser.interface';
import { AuthService } from './../../services/auth.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map, catchError, of } from 'rxjs';

@Injectable()

export class GetCurrentUserEffect {

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private persistanceService: PersistanceService,
    ) { }

    getCurrentUser$ = createEffect(() => this.actions$.pipe(
        ofType(getCurrentUserAction),
        switchMap(() => {
          const token = this.persistanceService.get('accessToken')
          if(!token){
            return of(getCurrentUserFailureAction())
          }
            return this.authService.getCurrentUser().pipe(
                map((currentUser: CurrentUserInterface) => {
                    return getCurrentUserSuccessAction({ currentUser })
                }),
                catchError(() => {
                    return of(getCurrentUserFailureAction())
                })
            )
        })
    ))
}
