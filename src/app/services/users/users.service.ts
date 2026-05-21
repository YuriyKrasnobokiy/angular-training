import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user-contract';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private http = inject(HttpClient);
  API_BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor() { }

  getUsersList(): Observable<User[]> {
    return this.http.get<User[]>(`${this.API_BASE_URL}/users/1/posts`);
  }

  getUserById(id: number): Observable<User>{
    return this.http.get<User>(`${this.API_BASE_URL}/users/${id}`)
  }
}
