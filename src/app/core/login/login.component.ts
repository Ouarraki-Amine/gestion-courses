import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService.login(this.username, this.password).subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.router.navigate(['/admin']); 
      } else {
        this.errorMessage = 'Nom d’utilisateur ou password incorrect.';
      }
    });
  }

}

