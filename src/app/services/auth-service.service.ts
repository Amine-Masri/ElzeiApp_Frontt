import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/api/v1/login'; // Changez selon votre API

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<string> {
    const loginData = { username, password };
    return this.http.post<{ token: string }>(this.loginUrl, loginData).pipe(
      map((response: { token: string; }) => {
        localStorage.setItem('jwt_token', response.token); // Stockez le token JWT
        return response.token; // Retourne le token
      })
    );
  }

  logout(): void {
    localStorage.removeItem('jwt_token'); // Supprime le token JWT pour se déconnecter
  }

  getToken(): string | null {
    return localStorage.getItem('jwt_token'); // Récupère le token JWT stocké
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null; // Vérifie si un token existe
  }
}
