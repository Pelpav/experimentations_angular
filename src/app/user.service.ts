import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './login/users';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly Url  = 'assets/users.json';
  private currentUser: User | null = null;

  constructor(private http: HttpClient) { }

  getUsers() : Observable <User[]>{
    return this.http.get<User[]>(this.Url);
  }
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.Url, user);
  }
  setCurrentUser(user: User) {
    this.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getCurrentUser(): User | null {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }


}
