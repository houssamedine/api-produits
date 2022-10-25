import { Users } from './../models/users.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: Users[] = [
    { username: 'admin', password: '123', roles: ['ADMIN'] },
    { username: 'houssam', password: '123', roles: ['USER'] },
  ];

  public loggedUser!: string;
  public isloggedIn: Boolean = false;
  public roles!: string[];
  constructor() {}

  SignIn(user: Users): Boolean {
    let validUser: Boolean = false;
    this.users.forEach((curUser) => {
      if (
        user.username == curUser.username &&
        user.password == curUser.password
      ) {
        validUser = true;
        this.loggedUser = curUser.username;
        this.isloggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
      }
    });
    return validUser;
  }
}
