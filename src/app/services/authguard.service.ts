import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true; // Permet l'accès si l'utilisateur est connecté
    } else {
      this.router.navigate(['/login']); // Redirige vers la page de connexion
      return false; // Bloque l'accès si l'utilisateur n'est pas connecté
    }
  }
}
