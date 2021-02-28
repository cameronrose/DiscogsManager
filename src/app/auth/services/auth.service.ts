import { Injectable } from '@angular/core';
import { of ,  throwError as _throw ,  Observable } from 'rxjs';
import { User, Authenticate } from '../models/user';

@Injectable()
export class AuthService {
  constructor() {}

  login({ username, password }: Authenticate): Observable<User> {
    /**
     * Simulate a failed login to display the error
     * message for the login form.
     */
    if (username !== 'test') {
      return _throw('Invalid username or password');
    }

    return of({ name: 'User' });
  }

  logout() {
    return of(true);
  }
}