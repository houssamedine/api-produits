import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {}

  onLogout() {
    this.authService.isLogout();
  }
  ngOnInit() {
    let isloggedin: string;
    let loggedUser: string;
    isloggedin = localStorage.getItem('isloggedIn')!;
    loggedUser = localStorage.getItem('loggedUser')!;
    if (isloggedin != 'true' || !loggedUser) this.router.navigate(['/login']);
    else this.authService.setLoggedUserFromLocalStorage(loggedUser);
  }
}
