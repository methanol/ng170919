import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  public constructor(
    private http: HttpClient
  ) {
  }

  public login(user: any): Observable<any> {
    return  this.http.post(`/auth/signin`, user);
  }

  public signUp(user: any): Observable<any> {
    return  this.http.post(`/auth/signup`, user);
  }

  public checkUser(): Observable<any> {
    return  this.http.get(`/user/checkuser`);
  }

  public tokenToLocalStorage(user: any): Observable<any> {
    if (!user || !user.accessToken) {
      return of(null);
    }
    localStorage.setItem('accessToken', user.accessToken);
    return of(user);
  }

  public getTokenFromLocalStorage(): Observable<string | null> {
    return of(localStorage.getItem('accessToken'));
  }

  public removeTokenFromLocalStorage(name: string): Observable<boolean> {
    localStorage.removeItem(name);
    return of(true);
  }
}
