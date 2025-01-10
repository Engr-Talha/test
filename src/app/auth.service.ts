import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor() { }

  private loggedIn = true;

  canActivate(): boolean {
    return this.loggedIn;
  }
}
