import { AuthResponseInterface } from './../shared/types/authResponse.interface';
import { CurrentUserInterface } from './../../shared/types/currentUser.interface';
import { map, Observable } from 'rxjs';
import { RegisterRequestInterface } from './../shared/types/registerRequest.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) { }
    
    register( data:RegisterRequestInterface): Observable<CurrentUserInterface> {
        const url = environment.apiUrl + '/users' 

        return this.http.post<AuthResponseInterface>(url , data).pipe(
            map((response: AuthResponseInterface) => response.user)
        )
    }
}
