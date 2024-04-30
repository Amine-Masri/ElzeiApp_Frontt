import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      () => {
        this.router.navigate(['/']); // Redirige vers la page principale après connexion
      },
      (error) => {
        console.error('Échec de la connexion', error);
      }
    );
  }
}
