import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users'; //url de l'api pour recuperer les donnees d'user

  constructor(private http: HttpClient) {}

  //methode qui gere l'authentification
  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users => {
        //verifier si un user correspond aux identifiants fournis
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
          const fakeToken = 'fakeToken'
          const expirationTime = new Date().getTime() + 30*60*1000;
          //stocker les info d'user et le token et la duree d'expiration du token
          localStorage.setItem('authToken', fakeToken);
          localStorage.setItem('tokenExpiration', expirationTime.toString());
          localStorage.setItem('user', JSON.stringify(user)); 
          return true;
        }
        return false;
      })
    );
  }

  //methode pour deconnecter l'user et supprimer les information du localStorage
  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('tokenExpiration');
    localStorage.removeItem('user');
  }

  //verifier si l'user est connecte
  isLoggedIn(): boolean {
    const token = localStorage.getItem('authToken');
    const expiration = localStorage.getItem('tokenExpiration');

    if (token && expiration) {
      const now = new Date().getTime();
      if (now < parseInt(expiration, 10)) {
        return true;
      } else {
        this.logout();
        return false;
      }
    }
    return false;
  }

  //recuperer les informations d'user connecte
  getCurrentUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}
