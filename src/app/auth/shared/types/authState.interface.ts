import { BackendErrorsInterface } from './../../../shared/types/backendErrors.interface';
import { CurrentUserInterface } from './../../../shared/types/currentUser.interface';
import { RegisterRequestInterface } from './registerRequest.interface';
export interface AuthStateInterface {
    isSubmitting: boolean
    currentUser: CurrentUserInterface | null 
    isLoggedIn: boolean | null
    validationErrors: BackendErrorsInterface | null
}