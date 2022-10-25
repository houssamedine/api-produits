import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Users } from './../models/users.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}
  user = new Users();
  erreur = 0;

  onLoggedin() {
    console.log(this.user);
    let isValidUser: Boolean = this.authService.SignIn(this.user);
    if (isValidUser) this.router.navigate(['/']);
    //alert('Login ou mot de passe incorrecte!');
    else this.erreur = 1;
  }
}
